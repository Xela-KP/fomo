import authReducer from './user/authSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    auth: authReducer,
});
