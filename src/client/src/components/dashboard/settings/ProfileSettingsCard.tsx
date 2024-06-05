import { Card, Avatar, TextInput } from 'flowbite-react';

export default () => (
    <Card className="">
        <div className="w-64 p-3">
            <div className="mb-2 flex items-center justify-between">
                <a href="#">
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                        alt="Jese Leos"
                    />
                </a>
            </div>
            <p
                id="profile-popover"
                className="text-base font-semibold leading-none text-gray-900 dark:text-white"
            >
                <a href="#">Jese Leos</a>
            </p>
            <p className="mb-3 text-sm font-normal">
                <a href="#" className="hover:underline">
                    @jeseleos
                </a>
            </p>
            <TextInput placeholder="Description"></TextInput>
            <p className="mb-4 text-sm"></p>
            <ul className="flex text-sm">
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
            </ul>
        </div>
    </Card>
);
