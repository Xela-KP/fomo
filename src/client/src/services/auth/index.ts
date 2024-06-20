import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import type {
    GoogleLoginForm,
    LoginForm,
    SignupForm,
} from '@shared/forms/auth';

import { apiRequest } from '..';
import { app } from '@src/firebase';

export const requestLogin = async (loginForm: LoginForm) => {
    try {
        const data = await apiRequest('api/login', 'post', loginForm);
        return data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

export const requestGoogleLogin = async () => {
    try {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        const googleResponse = await signInWithPopup(auth, provider);
        const googleUser = googleResponse.user;
        if (!googleUser) throw new Error('Could not retrieve google user data');

        const { displayName, photoURL, email } = googleUser;
        if (!displayName || !photoURL || !email)
            throw new Error('Could Not Retrieve Required information');

        const googleForm: GoogleLoginForm = {
            googleUsername: displayName,
            email,
            pfp: photoURL,
        };
        const data = await apiRequest('api/google', 'post', googleForm);
        return data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

export const requestSignup = async ({
    signupForm,
}: {
    signupForm: SignupForm;
}) => {
    try {
        const data = await apiRequest('api/signup', 'post', signupForm);
        return data;
    } catch (error) {
        console.log(error);
    }
};
