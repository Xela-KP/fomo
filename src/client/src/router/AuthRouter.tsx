import { Route, Routes } from 'react-router-dom';

import { Login } from '@src/pages/auth/Login';
import { Signup } from '@src/pages/auth/Signup';

export const AuthRouter = () => (
    <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Signup />} path="/*" />
    </Routes>
);
