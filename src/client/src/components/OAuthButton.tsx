import { Button } from 'flowbite-react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { loginFail, loginSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleGoogleAuthRequest = async () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
            const googleResponse = await signInWithPopup(auth, provider);
            const user = {
                username: googleResponse.user.displayName,
                email: googleResponse.user.email,
                photoUrl: googleResponse.user.photoURL,
            };
            const req: RequestInit = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            };
            const res = await fetch('/api/auth/google', req);
            console.log(res);
            const data = await res.json();

            if (data.success === false) {
                dispatch(loginFail(data.message));
            }
            if (res.ok) {
                dispatch(loginSuccess(data));
                navigate('/');
            }
        } catch (error) {
            dispatch(loginFail(error as string));
        }
    };
    return (
        <Button
            type="button"
            gradientDuoTone="tealToLime"
            outline
            onClick={handleGoogleAuthRequest}
        >
            <FcGoogle size={20} />
            <span className="ml-2">Continue with Google</span>
        </Button>
    );
};
