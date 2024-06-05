import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { User } from '../../types/user';

export interface UsersState {
    currentUser: object | null;
    errorMessage: string | null;
    loading: boolean;
}

const initialState: UsersState = {
    currentUser: null,
    errorMessage: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.errorMessage = null;
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.errorMessage = null;
        },
        loginFail: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.errorMessage = action.payload;
        },
    },
});

export const { loginStart, loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;
