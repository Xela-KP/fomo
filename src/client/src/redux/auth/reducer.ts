import authSlice from './slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['auth'],
};

const persistedAuthReducer = persistReducer(
    authPersistConfig,
    authSlice.reducer
);

export default persistedAuthReducer;
