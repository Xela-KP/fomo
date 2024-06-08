import { Card, Label } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { User } from '../../../types/user';

export default () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    const { about } = currentUser as User;
    return (
        <Card>
            <Label className="text-2xl">General Information</Label>
            <div>
                <Label className="text-md">About me</Label>
                <p className="text-gray-500 max-w-lg">{about}</p>
            </div>
            <div className="flex flex-col">
                <Label className="text-gray-600">Join Date</Label>
                <Label className="text-md">06-05-2024</Label>
            </div>
        </Card>
    );
};
