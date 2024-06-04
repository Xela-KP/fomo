import { Label, Button, TextInput, Alert, Spinner } from 'flowbite-react';
import {
    ChangeEvent,
    ChangeEventHandler,
    FormEvent,
    FormEventHandler,
    MouseEventHandler,
    useState,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default () => {
    const [showPwd, setShowPwd] = useState(false);
    const [pwdPrompt, setPwdPrompt] = useState('show');
    const [pwdType, setPwdType] = useState('password');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
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
        setErrorMessage('');
        try {
            setLoading(true);
            const req: RequestInit = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            };
            const res = await fetch('/api/auth/signup', req);
            const data = await res.json();
            if (data.success === false) return setErrorMessage(data.message);
            navigate('../login');
        } catch (error: any) {
            setErrorMessage(error.message);
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
                            placeholder="Password"
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
