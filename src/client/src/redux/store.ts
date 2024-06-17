import storePersist, { localStorageHealthCheck } from './storePersist';

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducers';

localStorageHealthCheck();

const preloadedState = { auth: storePersist.get('auth') }; // Type: RootState

export const store = configureStore({
    reducer: rootReducer,
    preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
