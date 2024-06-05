import { Card, Label } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';
export default () => (
    <Card>
        <Label className="text-lg text-bold">Socials</Label>
        <div className="flex lg:flex-col justify-center flex-wrap gap-4">
            <a href="#" className="flex flex-row gap-2 w-fit">
                <BsFacebook color="blue" size={20} className="self-center" />
                <span>Facebook</span>
            </a>
            <a href="#" className="flex flex-row gap-2 w-fit">
                <BsInstagram color="red" size={20} className="self-center" />
                <span>Instagram</span>
            </a>
            <a href="#" className="flex flex-row gap-2 w-fit">
                <BsGithub color="gray" size={20} className="self-center" />
                <span>GitHub</span>
            </a>
        </div>
    </Card>
);
