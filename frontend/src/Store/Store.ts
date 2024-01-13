// store/store.ts
import {configureStore} from '@reduxjs/toolkit';
import trainReducer from "./Slices/TrainSlice";
import loginReducer from './Slices/LoginSlice';

export const store = configureStore({
	reducer: {
		trainState: trainReducer,
		login: loginReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;