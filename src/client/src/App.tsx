import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="./pages/login" element={<Home />}></Route>
            <Route path="./pages/login" element={<Signup />}></Route>
            <Route path="./pages/login" element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
);
