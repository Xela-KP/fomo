import { Route, Routes } from 'react-router-dom';

import { Home } from '@src/pages/app/Home';
import { NotFound } from '@src/pages/common/NotFound';

export const AppRouter = () => (
    <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<NotFound />} path="/*" />
    </Routes>
);
