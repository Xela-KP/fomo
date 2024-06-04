import { Label, Button, TextInput } from 'flowbite-react';
import {
    ChangeEvent,
    ChangeEventHandler,
    MouseEventHandler,
    useState,
} from 'react';
import { Link } from 'react-router-dom';

export default () => {
    const [showPwd, setShowPwd] = useState(false);
    const [pwdPrompt, setPwdPrompt] = useState('show');
    const [pwdType, setPwdType] = useState('password');

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
        console.log(e.target);
    };

    return (
        <div className="flex w-full h-full justify-center">
            <div className="m-4 max-w-lg w-full justify-center">
                <span className="my-10 flex justify-center">
                    <Label className="text-xl">Create an account</Label>
                </span>
                <form className="flex flex-col gap-4">
                    <div>
                        <Label value="Username" />
                        <TextInput
                            type="text"
                            placeholder="Username"
                            id="username"
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
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <Button type="submit" gradientDuoTone="greenToBlue">
                        Sign Up
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
            </div>
        </div>
    );
};