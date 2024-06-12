import { Button, Card, Label, Modal, TextInput } from 'flowbite-react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { addLink, removeLink } from '../../../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';

import type { MouseEventHandler } from 'react';
import type { RootState } from '../../../redux/store';
import type { User } from '../../../types/user';

export const LinksSettingsCard = () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const [link, setLink] = useState('');
    const linkInputRef = useRef<HTMLInputElement>(null);
    const { _id, links } = currentUser as User;

    const getLinkSpans = () => {
        let id = 0;
        const listLinks = links.map((link) => {
            return (
                <li key={id++}>
                    <span className="flex flex-row gap-2 w-fit">
                        <a className="hover:underline" href={link}>
                            {link}
                        </a>
                        <IoMdRemove
                            className="self-center cursor-pointer"
                            onClick={() => {
                                removeClientLink(link);
                            }}
                        />
                    </span>
                </li>
            );
        });
        return <ul>{listLinks}</ul>;
    };

    const removeClientLink = async (link: string) => {
        try {
            const body = { link, remove: true };
            const req: RequestInit = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            };
            const res = await fetch(`/api/user/update/${_id}/links`, req);
            if (res.ok) dispatch(removeLink(link));
        } catch (error) {
            console.log(error);
        }
    };

    const addClientLink: MouseEventHandler<HTMLButtonElement> = async () => {
        try {
            const body = { link };
            const req: RequestInit = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            };
            const res = await fetch(`/api/user/update/${_id}/links`, req);
            if (res.ok) dispatch(addLink(link));
        } catch (error) {
            console.log(error);
        }
        setLink('');
        setShowModal(false);
    };
    return (
        <>
            <Card>
                <Label className="text-lg text-bold">Links</Label>
                <div className="flex flex-col justify-center flex-wrap gap-4">
                    {getLinkSpans()}
                    <Button
                        size="xs"
                        outline
                        pill
                        gradientDuoTone="tealToLime"
                        className="w-fit self-center"
                        onClick={() => setShowModal(true)}
                    >
                        <IoMdAdd className="self-center" />
                    </Button>
                </div>
            </Card>
            <Modal
                show={showModal}
                size="md"
                popup
                onClose={() => setShowModal(false)}
                initialFocus={linkInputRef}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Link" />
                            </div>
                            <TextInput
                                id="link"
                                ref={linkInputRef}
                                value={link}
                                onChange={(e) => {
                                    setLink(e.target.value);
                                }}
                                placeholder="https://example.com"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <Button
                                size="sm"
                                outline
                                pill
                                gradientDuoTone="tealToLime"
                                onClick={addClientLink}
                            >
                                Add Link
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};
