import { Navigate, Outlet } from 'react-router-dom';

import type { RootState } from '@redux/store';
import { useSelector } from 'react-redux';

export const PrivateRoute = () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    return currentUser ? <Outlet /> : <Navigate to="login" />;
};
