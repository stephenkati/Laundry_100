import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/axios';

export const createUser =  createAsyncThunk(
  'user/register',
  async (registrationDetails, thunkAPI) => {
    try {
      const response = await api.post(
        '/api/v1/users',
        {registrationDetails},
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      
      console.log(response.data)
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
        '/api/v1/login',
        {loginDetails},
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      
      console.log(response.data)
      return response.data;

    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
);

const initialState = {
  isLoading: false,
  user: null,
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
        state.user = action.payload;
        state.authenticated = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.authenticated = false;
      })
      .addCase(logInUser.pending, (state) => {state.isLoading = true})
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.authenticated = true;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.authenticated = false;
      })
  }
});

export default userSlice.reducer;
