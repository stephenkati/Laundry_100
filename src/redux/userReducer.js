import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/axios';
import { saveToken } from '../api/localStorage';

export const createUser =  createAsyncThunk(
  'user/register',
  async (registrationDetails, thunkAPI) => {
    try {
      const response = await api.post(
        '/users',
        {registrationDetails},
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      
      return response.data;

    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
);

export const logInUser =  createAsyncThunk(
  'login',
  async (loginDetails, thunkAPI) => {
    try {
      const response = await api.post(
        '/login',
        {loginDetails},
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      
      return response.data;

    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
);

const initialState = {
  isLoading: false,
  user: null,
  token: null,
  authenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {state.isLoading = true})
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.authenticated = true;
        saveToken(state.token);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.authenticated = false;
      })
      .addCase(logInUser.pending, (state) => {state.isLoading = true})
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.authenticated = true;
        saveToken(state.token);
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.authenticated = false;
      })
  }
});

export default userSlice.reducer;
