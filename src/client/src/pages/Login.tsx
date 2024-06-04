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
    const [formData, setFormData] = useState({});
    const [alert, setAlert] = useState(String);
    const [loading, setLoading] = useState(false);
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

    const handleSubmit: FormEventHandler = async (e: FormEvent) => {
        e.preventDefault();
        setAlert('');
        try {
            setLoading(true);
            const req: RequestInit = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            };
            const res = await fetch('/api/auth/login', req);
            const data = await res.json();
            setLoading(false);
            if (data.success === false) return setAlert('Invalid Credentials');
            return navigate('/');
        } catch (error) {
            console.error(error);
            setLoading(false);
            return setAlert('Failed to login');
        }
    };

    const handleInput: ChangeEventHandler = (e: ChangeEvent) => {
        const target: HTMLInputElement = e.target as HTMLInputElement;
        setFormData({ ...formData, [target.id]: target.value.trim() });
    };
    console.log(formData);

    return (
        <div className="flex w-full h-full justify-center">
            <div className="m-4 max-w-lg w-full justify-center">
                <span className="my-10 flex justify-center">
                    <Label className="text-xl">Log In</Label>
                </span>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                            placeholder="********"
                            type={pwdType}
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <Button type="submit" gradientDuoTone="greenToBlue">
                        {loading ? <Spinner></Spinner> : <span>Log In</span>}
                    </Button>
                </form>
                <div className="mt-2 space-x-2">
                    <Label>Don't have an account?</Label>
                    <Link to="../signup">
                        <Label className="cursor-pointer text-blue-600">
                            Sign Up
                        </Label>
                    </Link>
                </div>
                {alert && (
                    <Alert color="failure" className="mt-5">
                        {alert}
                    </Alert>
                )}
            </div>
        </div>
    );
};
