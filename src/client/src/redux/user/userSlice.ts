import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import type { User } from '../../types/user';

export interface UsersState {
    currentUser: User | null;
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
        updateBio: (state, action: PayloadAction<string>) => {
            if (state.currentUser) state.currentUser.bio = action.payload;
        },
        updateAbout: (state, action: PayloadAction<string>) => {
            if (state.currentUser) state.currentUser.about = action.payload;
        },
        removeLink: (state, action: PayloadAction<string>) => {
            if (state.currentUser) {
                var i = 0;
                while (i < state.currentUser.links.length) {
                    if (state.currentUser.links[i] === action.payload) {
                        state.currentUser.links.splice(i, 1);
                    } else {
                        ++i;
                    }
                }
            }
        },
        addLink: (state, action: PayloadAction<string>) => {
            if (state.currentUser) state.currentUser.links.push(action.payload);
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFail,
    updateBio,
    updateAbout,
    removeLink,
    addLink,
} = userSlice.actions;
export default userSlice.reducer;
