import type { AppRoute } from './types';
import { Login } from '@src/pages/auth/Login';

const routes: AppRoute[] = [];
routes.push({
    path: '/login',
    element: <Login />,
});
