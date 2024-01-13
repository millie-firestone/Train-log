// src/store/loginSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LoginState {
	isLoggedIn: boolean;
}

const initialState: LoginState = {
	isLoggedIn: false,
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		logIn: (state) => {
			state.isLoggedIn = true;
		},
		logOut: (state) => {
			state.isLoggedIn = false;
		},
	},
});

export const {logIn, logOut} = loginSlice.actions;

export default loginSlice.reducer;
