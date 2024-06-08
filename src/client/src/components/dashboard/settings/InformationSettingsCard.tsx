import { Button, Card, Label, Textarea } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { User } from '../../../types/user';

export default () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    const { about } = currentUser as User;
    const saveAbout = () => {};
    return (
        <Card>
            <Label className="text-2xl">General Information</Label>
            <div>
                <Label className="text-md">About me</Label>
                <Textarea rows={5}>{about}</Textarea>
            </div>
            <Button
                outline
                pill
                gradientDuoTone="tealToLime"
                className="w-fit self-end"
                onClick={saveAbout}
            >
                Save
            </Button>
            <div className="flex flex-col">
                <Label className="text-gray-600">Join Date</Label>
                <Label className="text-md">06-05-2024</Label>
            </div>
        </Card>
    );
};
