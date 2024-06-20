import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import type { AppDispatch, RootState } from '@src/redux/store';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import type { LoginForm } from '@shared/forms/auth';
import { OAuthButton } from '@src/components/OAuthButton';
import { login } from '@src/redux/auth/thunks';
import { useState, type ChangeEventHandler } from 'react';

export const Login = () => {
    const { isLoading, isSuccess, errorMessage } = useSelector(
        (state: RootState) => state.auth
    );
    const dispatch = useDispatch<AppDispatch>();
    const [loginForm, setLoginForm]: [LoginForm, Function] = useState({
        email: '',
        password: '',
    });

    const handleTextInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <div className="flex w-full h-full justify-center">
            <div className="m-4 max-w-lg w-full justify-center">
                <span className="my-10 flex justify-center">
                    <Label className="text-xl">Log In</Label>
                </span>

                <form className="flex flex-col gap-4" onSubmit={() => {}}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Email" />
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            placeholder="example@domain.com"
                            required
                            onChange={handleTextInput}
                        />
                    </div>

                    <div>
                        <div className="mb-2 flex justify-between">
                            <Label htmlFor="password" value="Password" />
                            <Label className="p-1 cursor-pointer select-none" />
                        </div>
                        <TextInput
                            id="password"
                            placeholder="********"
                            type="password"
                            required
                            onChange={handleTextInput}
                        />
                    </div>

                    <Button
                        type="submit"
                        gradientDuoTone="greenToBlue"
                        onClick={() => dispatch(login(loginForm))}
                    >
                        {isLoading ? <Spinner></Spinner> : <span>Log In</span>}
                    </Button>

                    <OAuthButton />
                </form>

                <div className="mt-2 space-x-2">
                    <Label>Don't have an account?</Label>
                    <Link to="../signup">
                        <Label className="cursor-pointer text-blue-600">
                            Sign Up
                        </Label>
                    </Link>
                </div>

                {!isSuccess && (
                    <Alert color="failure" className="mt-5">
                        <span>{errorMessage}</span>
                    </Alert>
                )}
            </div>
        </div>
    );
};
