import { Card, Label } from 'flowbite-react';
import { User } from '../../../types/user';
export default ({ user }: { user: User }) => {
    const { links } = user;

    const getLinkSpans = () => {
        let id = 0;
        const listLinks = links.map((link) => {
            return (
                <li key={id++}>
                    <a className="hover:underline" href={link}>
                        {link}
                    </a>
                </li>
            );
        });
        return <ul>{listLinks}</ul>;
    };
    return (
        <Card>
            <Label className="text-lg text-bold">Links</Label>
            <div className="flex flex-col justify-center flex-wrap gap-4">
                {getLinkSpans()}
            </div>
        </Card>
    );
};
