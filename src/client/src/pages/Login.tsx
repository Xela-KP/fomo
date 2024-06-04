import { Label, Button, TextInput } from 'flowbite-react';
import { MouseEventHandler, useState } from 'react';
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

    return (
        <div className="flex w-screen h-screen justify-center">
            <div className="m-4 max-w-lg w-full justify-center">
                <span className="my-10 flex justify-center">
                    <Label className="text-xl">Log In</Label>
                </span>
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Email" />
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            placeholder="example@domain.com"
                            required
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
                        <TextInput id="password" type={pwdType} required />
                    </div>
                    <Button type="submit" gradientDuoTone="greenToBlue">
                        Log In
                    </Button>
                </form>
                <div className="mt-2 space-x-2">
                    <Label>Already have an account?</Label>
                    <Link to="../signup">
                        <Label className="cursor-pointer text-blue-600">
                            Sign Up
                        </Label>
                    </Link>
                </div>
            </div>
        </div>
    );
};
