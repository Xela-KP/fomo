import { Button, Card, Label, Textarea } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { User } from '../../../types/user';
import { ChangeEventHandler, useState } from 'react';
import { updateAbout } from '../../../redux/user/userSlice';

export default () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const { _id, about } = currentUser as User;
    const [clientAbout, updateClientAbout] = useState(about);
    const onAboutChange: ChangeEventHandler<HTMLTextAreaElement> = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        updateClientAbout(e.target.value);
    };
    const saveAbout = async () => {
        try {
            const body = { about: clientAbout };
            const req: RequestInit = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            };
            const res = await fetch(`/api/user/update/${_id}/about`, req);
            if (res.ok) dispatch(updateAbout(clientAbout));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Card>
            <Label className="text-2xl">General Information</Label>
            <div>
                <Label className="text-md">About me</Label>
                <Textarea
                    rows={5}
                    value={clientAbout}
                    onChange={onAboutChange}
                />
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
