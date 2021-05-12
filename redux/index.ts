import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import userSlice from './slices/userSlice';

const store = configureStore({
	reducer: {
	  user: userSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
