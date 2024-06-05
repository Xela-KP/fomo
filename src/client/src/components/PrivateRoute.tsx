import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Navigate, Outlet } from 'react-router-dom';
export default () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    return currentUser ? <Outlet /> : <Navigate to="login" />;
};
