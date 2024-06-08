import { Button, Card, Label } from 'flowbite-react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { User } from '../../../types/user';

const getLinkSpans = (links: string[]) => {
    let id = 0;
    const listItems = links.map((link) => {
        return (
            <li key={id++}>
                <span className="flex flex-row gap-2 w-fit">
                    <a className="hover:underline" href={link}>
                        {link}
                    </a>
                    <IoMdRemove className="self-center cursor-pointer" />
                </span>
            </li>
        );
    });
    return <ul>{listItems}</ul>;
};

export default () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    const { links } = currentUser as User;
    return (
        <Card>
            <Label className="text-lg text-bold">Socials</Label>
            <div className="flex flex-col justify-center flex-wrap gap-4">
                {getLinkSpans(links)}
                <Button
                    size="xs"
                    outline
                    pill
                    gradientDuoTone="tealToLime"
                    className="w-fit self-center"
                >
                    <IoMdAdd className="self-center" />
                </Button>
            </div>
        </Card>
    );
};
