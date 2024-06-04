import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { User } from '../../types/user';

export interface UsersState {
    currentUser: object | null;
    error: string | unknown;
    loading: boolean;
}

const initialState: UsersState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        loginFail: (state, action: PayloadAction<unknown>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { loginStart, loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;
