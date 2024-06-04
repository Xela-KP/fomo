import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
export default () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="login" element={<Login />}></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
);
