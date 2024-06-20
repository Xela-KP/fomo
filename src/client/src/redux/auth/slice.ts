import type User from '@shared/models/User';
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    isLoggedIn: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    errorMessage?: string;
    currentUser?: User;
}

const initialState: AuthState = {
    isLoggedIn: false,
    isLoading: false,
    isSuccess: true,
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
            state.isLoggedIn = true;
            state.isLoading = false;
            state.isSuccess = true;
            state.currentUser = action.payload;
            state.errorMessage = undefined;
        },
        loginFailure: (state) => {
            state.isLoggedIn = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.currentUser = undefined;
            state.errorMessage = 'Failed to Log In';
        },
        signupRequest: (state) => {
            state.isLoading = true;
        },
        signupSuccess: (state) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.errorMessage = undefined;
        },
        signupFailure: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = 'Sign Up Failed';
        },
    },
});

export default authSlice;
