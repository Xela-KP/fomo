import type { AppDispatch } from '@src/redux/store';
import { Button } from 'flowbite-react';
import { FcGoogle } from 'react-icons/fc';
import { googleLogin } from '@src/redux/auth/thunks';
import { useDispatch } from 'react-redux';

// import { loginFail, loginSuccess } from '@redux/auth/index';

export const OAuthButton = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Button
            type="button"
            gradientDuoTone="tealToLime"
            outline
            onClick={() => dispatch(googleLogin())}
        >
            <FcGoogle size={20} />
            <span className="ml-2">Continue with Google</span>
        </Button>
    );
};
