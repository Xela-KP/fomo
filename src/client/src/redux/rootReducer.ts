import authReducer from './auth/reducer';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const rootReducer = combineReducers({
    auth: authReducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export default persistedRootReducer;
