import { Sidebar } from 'flowbite-react';
import { HiCog, HiUserCircle, HiArrowSmRight } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetUserState } from '../../redux/user/userSlice';

export default ({ tab }: { tab: string }) => {
    const dispatch = useDispatch();
    return (
        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to="?tab=profile">
                        <Sidebar.Item
                            as="div"
                            active={tab === 'profile'}
                            icon={HiUserCircle}
                        >
                            Profile
                        </Sidebar.Item>
                    </Link>
                    {/* <Link to="?tab=friends">
                        <Sidebar.Item
                            as="div"
                            active={tab === 'friends'}
                            icon={HiUser}
                        >
                            Friends
                        </Sidebar.Item>
                    </Link>
                    <Link to="?tab=inbox">
                        <Sidebar.Item
                            as="div"
                            active={tab === 'inbox'}
                            icon={HiInbox}
                            label="3"
                        >
                            Inbox
                        </Sidebar.Item>
                    </Link> */}
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Link to="?tab=settings">
                        <Sidebar.Item
                            as="div"
                            active={tab === 'settings'}
                            icon={HiCog}
                        >
                            Settings
                        </Sidebar.Item>
                    </Link>
                    <Sidebar.Item
                        as="div"
                        icon={HiArrowSmRight}
                        onClick={() => {
                            dispatch(resetUserState());
                        }}
                        className="cursor-pointer"
                    >
                        Log Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};
