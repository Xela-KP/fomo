import googleLogin from './googleLogin.js';
import login from './login.js';
import signup from './signup.js';

export default () => {
    return {
        login,
        signup,
        googleLogin,
    };
};
