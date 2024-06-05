import { Sidebar } from 'flowbite-react';
import {
    HiCog,
    HiUserCircle,
    HiArrowSmRight,
    HiInbox,
    HiUser,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default ({ tab }: { tab: string }) => {
    return (
        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to="?tab=profile">
                        <Sidebar.Item
                            active={tab === 'profile'}
                            icon={HiUserCircle}
                        >
                            Profile
                        </Sidebar.Item>
                    </Link>
                    <Link to="?tab=friends">
                        <Sidebar.Item active={tab === 'friends'} icon={HiUser}>
                            Friends
                        </Sidebar.Item>
                    </Link>
                    <Link to="?tab=inbox">
                        <Sidebar.Item
                            active={tab === 'inbox'}
                            icon={HiInbox}
                            label="3"
                        >
                            Inbox
                        </Sidebar.Item>
                    </Link>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Link to="?tab=settings">
                        <Sidebar.Item active={tab === 'settings'} icon={HiCog}>
                            Settings
                        </Sidebar.Item>
                    </Link>
                    <Link to="../logout">
                        <Sidebar.Item icon={HiArrowSmRight}>
                            Log Out
                        </Sidebar.Item>
                    </Link>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};
