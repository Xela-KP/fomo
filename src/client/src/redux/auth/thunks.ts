import type { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { LoginForm, SignupForm } from '@shared/forms/auth';
import {
    loginFailure,
    loginRequest,
    loginSuccess,
    signupFailure,
    signupRequest,
    signupSuccess,
} from './actions';
import {
    requestGoogleLogin,
    requestLogin,
    requestSignup,
} from '@src/services/auth';

import type { RootState } from '../store';

export const login =
    (loginForm: LoginForm): ThunkAction<void, RootState, undefined, Action> =>
    async (dispatch: ThunkDispatch<RootState, undefined, Action>) => {
        dispatch(loginRequest());
        const data = await requestLogin(loginForm);
        if (!data) return dispatch(loginFailure());
        const { user } = data;
        if (!user) return dispatch(loginFailure());
        dispatch(loginSuccess(user));
    };

export const googleLogin =
    (): ThunkAction<void, RootState, undefined, Action> =>
    async (dispatch: ThunkDispatch<RootState, undefined, Action>) => {
        dispatch(loginRequest());
        const data = await requestGoogleLogin();
        if (!data) return dispatch(loginFailure());
        const { user } = data;
        if (!user) return dispatch(loginFailure());
        dispatch(loginSuccess(user));
    };

export const signup =
    (signupForm: SignupForm): ThunkAction<void, RootState, undefined, Action> =>
    async (dispatch: ThunkDispatch<RootState, undefined, Action>) => {
        dispatch(signupRequest());
        const data = await requestSignup({ signupForm });
        if (!data) return dispatch(signupFailure());
        dispatch(signupSuccess());
    };
