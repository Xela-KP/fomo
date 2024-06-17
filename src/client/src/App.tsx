import { Route, Routes } from 'react-router-dom';

import { CreatePostPage } from '@pages/CreatePostPage';
import { DashboardPage } from '@pages/DashboardPage';
import { Home } from '@pages/Home';
import { Login } from '@src/pages/Login';
import { PrivateRoute } from '@routes/PrivateRoute';
import { ProfilePageRoute } from '@routes/ProfilePageRoute';
import { Signup } from '@src/pages/Signup';

const App = function () {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<PrivateRoute />}>
                <Route path="dashboard" element={<DashboardPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path="create-post" element={<CreatePostPage />} />
            </Route>
            <Route path="/:username" element={<ProfilePageRoute />} />
        </Routes>
    );
};
export default App;
