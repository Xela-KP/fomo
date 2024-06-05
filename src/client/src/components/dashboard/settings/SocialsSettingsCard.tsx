import { Button, Card, Label } from 'flowbite-react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
export default () => (
    <Card>
        <Label className="text-lg text-bold">Socials</Label>
        <div className="flex lg:flex-col justify-center flex-wrap gap-4">
            <span className="flex flex-row gap-2 w-fit">
                <span>Facebook</span>
                <IoMdRemove className="self-center cursor-pointer" />
            </span>
            <span className="flex flex-row gap-2 w-fit">
                <span>Instagram</span>
                <IoMdRemove className="self-center cursor-pointer" />
            </span>
            <span className="flex flex-row gap-2 w-fit">
                <span>GitHub</span>
                <IoMdRemove className="self-center cursor-pointer" />
            </span>
            <Button outline pill gradientDuoTone="tealToLime" className="w-fit">
                <IoMdAdd className="self-center" />
            </Button>
        </div>
    </Card>
);
