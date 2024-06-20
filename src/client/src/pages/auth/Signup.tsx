import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { OAuthButton } from '@src/components/auth/OAuthButton';
import type { AppDispatch, RootState } from '@src/redux/store';
import type { SignupForm } from '@shared/forms/auth';
import { useState, type ChangeEventHandler } from 'react';
import { signup } from '@src/redux/auth/thunks';

export const Signup = () => {
    const { isLoading, errorMessage, isSuccess } = useSelector(
        (state: RootState) => state.auth
    );
    const dispatch = useDispatch<AppDispatch>();
    const [signupForm, setSignupForm]: [SignupForm, Function] = useState({
        username: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const handleTextInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignupForm({ ...signupForm, [e.target.id]: e.target.value });
    };
    return (
        <div className="flex w-full h-full justify-center">
            <div className="m-4 max-w-lg w-full justify-center">
                <span className="my-10 flex justify-center">
                    <Label className="text-xl">Create an account</Label>
                </span>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        dispatch(signup(signupForm));
                        if (isSuccess) navigate('/login');
                    }}
                    className="flex flex-col gap-4"
                >
                    <div>
                        <Label value="Username" />
                        <TextInput
                            id="username"
                            type="text"
                            placeholder="Username"
                            required
                            onChange={handleTextInput}
                        />
                    </div>
                    <div>
                        <Label htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            placeholder="example@domain.com"
                            required
                            onChange={handleTextInput}
                        />
                    </div>
                    <div>
                        <Label htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            placeholder="********"
                            required
                            onChange={handleTextInput}
                        />
                    </div>
                    <Button
                        type="submit"
                        gradientDuoTone="greenToBlue"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <Spinner>Loading...</Spinner>
                        ) : (
                            <span>Sign Up</span>
                        )}
                    </Button>
                    <OAuthButton />
                </form>
                <div className="mt-2 space-x-2">
                    <Label>Already have an account?</Label>
                    <Link to="../login">
                        <Label className="cursor-pointer text-blue-600">
                            Log In
                        </Label>
                    </Link>
                </div>
                {!isSuccess && (
                    <Alert className="mt-5" color="failure">
                        {errorMessage}
                    </Alert>
                )}
            </div>
        </div>
    );
};
