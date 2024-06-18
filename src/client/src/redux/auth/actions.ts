import authSlice from './slice';

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    signupRequest,
    signupSuccess,
    signupFailure,
} = authSlice.actions;

export default authSlice.actions;
