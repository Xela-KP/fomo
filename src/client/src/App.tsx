import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
export default () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route element={<PrivateRoute />}>
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/:username" element={<User />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);
