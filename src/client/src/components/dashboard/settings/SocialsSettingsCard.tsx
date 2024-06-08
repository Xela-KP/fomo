import { Button, Card, Label } from 'flowbite-react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { User } from '../../../types/user';
import { JSX } from 'react/jsx-runtime';

const getLinkSpans = (links: string[]) => {
    const spans: JSX.Element[] = [];
    for (const link of links) {
        spans.push(
            <span className="flex flex-row gap-2 w-fit">
                <a href={link}>{link}</a>
                <IoMdRemove className="self-center cursor-pointer" />
            </span>
        );
    }
    return spans;
};

export default () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    const { links } = currentUser as User;
    return (
        <Card>
            <Label className="text-lg text-bold">Socials</Label>
            <div className="flex lg:flex-col justify-center flex-wrap gap-4">
                {getLinkSpans(links)}
                <Button
                    outline
                    pill
                    gradientDuoTone="tealToLime"
                    className="w-fit"
                >
                    <IoMdAdd className="self-center" />
                </Button>
            </div>
        </Card>
    );
};
