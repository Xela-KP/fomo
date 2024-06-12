import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CreatePostPage } from './pages/CreatePostPage';
import { DashboardPage } from './pages/DashboardPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { PageFooter } from './components/Footer';
import { PageHeader } from './components/Header';
import { PrivateRoute } from './routes/PrivateRoute';
import { ProfilePageRoute } from './routes/ProfilePageRoute';
import { SignupPage } from './pages/SignupPage';

export const App = function () {
    return (
        <BrowserRouter>
            <PageHeader />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route element={<PrivateRoute />}>
                    <Route path="dashboard" element={<DashboardPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="create-post" element={<CreatePostPage />} />
                </Route>
                <Route path="/:username" element={<ProfilePageRoute />} />
            </Routes>
            <PageFooter />
        </BrowserRouter>
    );
};
