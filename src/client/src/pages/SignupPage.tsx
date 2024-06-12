import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import type {
    ChangeEvent,
    ChangeEventHandler,
    FormEvent,
    FormEventHandler,
    MouseEventHandler,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { OAuthButton } from '../components/OAuthButton';
import { useState } from 'react';

export const SignupPage = () => {
    const [showPwd, setShowPwd] = useState(false);
    const [pwdPrompt, setPwdPrompt] = useState('show');
    const [pwdType, setPwdType] = useState('password');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>();
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const togglePwdPrompt: MouseEventHandler = () => {
        setShowPwd(!showPwd);
        if (showPwd) {
            setPwdPrompt('hide');
            setPwdType('');
        } else {
            setPwdPrompt('show');
            setPwdType('password');
        }
    };

    const handleInput: ChangeEventHandler = (e: ChangeEvent) => {
        const target: HTMLInputElement = e.target as HTMLInputElement;
        setFormData({ ...formData, [target.id]: target.value.trim() });
    };

    const handleSubmit: FormEventHandler = async (e: FormEvent) => {
        e.preventDefault();
        setErrorMessage(undefined);
        const { username, password } = formData as {
            username: string;
            email: string;
            password: string;
        };
        if (username.length < 3) {
            setErrorMessage('Username must contain 3 characters or more');
            return setLoading(false);
        }
        if (password.length < 8) {
            setErrorMessage('Password must contain 8 characters or more');
            return setLoading(false);
        }
        try {
            setLoading(true);
            const req: RequestInit = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            };
            const res = await fetch('/api/auth/signup', req);
            const data = await res.json();
            console.log(data);
            if (data.success === true) navigate('../login');
            else
                setErrorMessage(
                    'An account with the provided username or email already exists.'
                );
        } catch (error) {
            console.log(error);
        }
        return setLoading(false);
    };

    return (
        <div className="flex w-full h-full justify-center">
            <div className="m-4 max-w-lg w-full justify-center">
                <span className="my-10 flex justify-center">
                    <Label className="text-xl">Create an account</Label>
                </span>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <Label value="Username" />
                        <TextInput
                            id="username"
                            type="text"
                            placeholder="Username"
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Email" />
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            placeholder="example@domain.com"
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <div className="mb-2 flex justify-between">
                            <Label htmlFor="password" value="Password" />
                            <Label
                                value={pwdPrompt}
                                onClick={togglePwdPrompt}
                                className="p-1 cursor-pointer select-none"
                            />
                        </div>
                        <TextInput
                            id="password"
                            type={pwdType}
                            placeholder="********"
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <Button
                        type="submit"
                        gradientDuoTone="greenToBlue"
                        disabled={loading}
                    >
                        {loading ? (
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
                {errorMessage && (
                    <Alert className="mt-5" color="failure">
                        {errorMessage}
                    </Alert>
                )}
            </div>
        </div>
    );
};
