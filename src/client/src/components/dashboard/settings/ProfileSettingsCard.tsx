import { Button, Card, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { User } from '../../../types/user';
import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { updateBio } from '../../../redux/user/userSlice';

export default () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: RootState) => state.user);
    const { _id, username, profilePicture, bio } = currentUser as User;
    let [clientBio, setClientBio] = useState(bio);
    const onBioChange: ChangeEventHandler<HTMLInputElement> = (e) =>
        setClientBio(e.target.value);
    const updateUserBio: MouseEventHandler = async () => {
        const body = { bio: clientBio };
        const req: RequestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        };
        const res = await fetch(`/api/users/user/${_id}/bio`, req);
        if (res.ok) {
            dispatch(updateBio(clientBio));
        }
        try {
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Card className="">
            <div className="w-64 p-3">
                <div className="mb-2 flex items-center justify-between">
                    <a href="#">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={profilePicture as string}
                            alt={username as string}
                        />
                    </a>
                </div>
                <p className="text-base font-semibold leading-none text-gray-900 dark:text-white mb-2">
                    <a href="#" className="hover:underline">
                        @{username}
                    </a>
                </p>
                <span className="flex flex-row gap-2">
                    <TextInput
                        placeholder="Bio"
                        value={clientBio}
                        onChange={onBioChange}
                    />
                    <Button
                        size="xs"
                        outline
                        pill
                        gradientDuoTone="tealToLime"
                        className="w-fit self-center"
                        onClick={updateUserBio}
                    >
                        Save
                    </Button>
                </span>
                <p className="mb-4 text-sm"></p>
                <ul className="flex text-sm">
                    <li className="me-2">
                        <a href="#" className="hover:underline">
                            <span className="font-semibold text-gray-900 dark:text-white">
                                799
                            </span>
                            <span>Following</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            <span className="font-semibold text-gray-900 dark:text-white">
                                3,758
                            </span>
                            <span>Followers</span>
                        </a>
                    </li>
                </ul>
            </div>
        </Card>
    );
};
