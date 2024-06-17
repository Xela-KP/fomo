import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type User from '@shared/models/User';

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
        // updateProfilePicture: (state, action: PayloadAction<string>) => {
        //     if (state.currentUser)
        //         state.currentUser.profilePicture = action.payload;
        // },
        // updateBio: (state, action: PayloadAction<string>) => {
        //     if (state.currentUser) state.currentUser.bio = action.payload;
        // },
        // updateAbout: (state, action: PayloadAction<string>) => {
        //     if (state.currentUser) state.currentUser.about = action.payload;
        // },
        // removeLink: (state, action: PayloadAction<string>) => {
        //     if (state.currentUser) {
        //         let i = 0;
        //         while (i < state.currentUser.links.length) {
        //             if (state.currentUser.links[i] === action.payload) {
        //                 state.currentUser.links.splice(i, 1);
        //             } else {
        //                 ++i;
        //             }
        //         }
        //     }
        // },
        // addLink: (state, action: PayloadAction<string>) => {
        //     if (state.currentUser) state.currentUser.links.push(action.payload);
        // },
        resetUserState: (state) => {
            state.currentUser = null;
            state.errorMessage = null;
            state.loading = false;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFail,
    // updateBio,
    // updateAbout,
    // removeLink,
    // addLink,
    // updateProfilePicture,
    resetUserState,
} = userSlice.actions;
export default userSlice.reducer;
