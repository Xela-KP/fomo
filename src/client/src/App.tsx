import { AppRouter } from './router/AppRouter';
import { AuthRouter } from './router/AuthRouter';
import type { RootState } from './redux/store';
import { useSelector } from 'react-redux';

export default () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    return isLoggedIn ? <AppRouter /> : <AuthRouter />;
};
