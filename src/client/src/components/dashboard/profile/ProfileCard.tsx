import { Card } from 'flowbite-react';
import type User from '@shared/models/User';

export const ProfileCard = ({ user }: { user: User }) => {
    const { bio, username, pfp } = user;
    return (
        <Card className="">
            <div className="w-64 p-3">
                <div className="mb-2 flex items-center justify-between">
                    <a href="#">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={pfp}
                            alt={username}
                        />
                    </a>
                </div>
                <p className="text-base font-semibold leading-none text-gray-900 dark:text-white mb-2">
                    <a href="#" className="hover:underline">
                        @{username}
                    </a>
                </p>
                <p className="mb-4 text-sm">{bio}</p>
                {/* <ul className="flex text-sm">
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
                </ul> */}
            </div>
        </Card>
    );
};
