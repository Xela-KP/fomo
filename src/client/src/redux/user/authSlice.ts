import type User from '@shared/models/User';
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    isLoggedIn: boolean;
    currentUser?: User;
}

const initialState: AuthState = {
    isLoggedIn: false,
    currentUser: undefined,
};

const authSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        },
        update: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});

export const { login, logout, update } = authSlice.actions;
export default authSlice.reducer;
