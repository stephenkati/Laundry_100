import { configureStore } from '@reduxjs/toolkit';
import userRuducer from '../userRuducer';

const store = configureStore({
  user: userRuducer
});

export default store;
