import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
export default () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="./pages/login" element={<Home />}></Route>
            <Route path="./pages/login" element={<Signup />}></Route>
            <Route path="./pages/login" element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
);
