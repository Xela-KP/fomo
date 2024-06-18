import type User from '@shared/models/User';
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    isLoggedIn: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    currentUser?: User;
}

const initialState: AuthState = {
    isLoggedIn: false,
    isLoading: false,
    isSuccess: false,
    currentUser: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginRequest: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isLoggedIn = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.currentUser = undefined;
        },
        signupRequest: (state) => {
            state.isLoading = true;
        },
        signupSuccess: (state) => {
            state.isLoading = false;
            state.isSuccess = true;
        },
        signupFailure: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
        },
    },
});

export default authSlice;
