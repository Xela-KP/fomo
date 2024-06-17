import { Avatar, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineSearch } from 'react-icons/ai';
import { Brand } from './Brand';
import type { FormEventHandler } from 'react';
import { Link } from 'react-router-dom';
import type { RootState } from '@redux/store';
import type User from '@shared/models/User';
import { resetUserState } from '@redux/user/userSlice';
import { useState } from 'react';

const SearchBar = () => {
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
    };
    const [search, setSearch] = useState('');
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Search Fomo..."
                rightIcon={AiOutlineSearch}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
};

const ProfileDropdown = () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    const { username, pfp } = currentUser
        ? (currentUser as User)
        : {
              username: '',
              pfp: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
          };

    const dispatch = useDispatch();
    return (
        <div className="md:order-2">
            <Dropdown
                arrowIcon={false}
                inline
                label={<Avatar alt="User settings" img={pfp} rounded />}
            >
                {currentUser && (
                    <Dropdown.Header>
                        <span className="block truncate text-sm font-medium">
                            {username}
                        </span>
                    </Dropdown.Header>
                )}
                {currentUser && (
                    <>
                        <Link to="dashboard/?tab=profile">
                            <Dropdown.Item>Profile</Dropdown.Item>
                        </Link>
                        <Link to="dashboard/?tab=settings">
                            <Dropdown.Item>Settings</Dropdown.Item>
                        </Link>
                        <Dropdown.Divider />
                    </>
                )}
                {!currentUser && (
                    <>
                        <Link to="login">
                            <Dropdown.Item>Log In</Dropdown.Item>
                        </Link>
                        <Link to="signup">
                            <Dropdown.Item>Sign Up</Dropdown.Item>
                        </Link>
                    </>
                )}
                {currentUser && (
                    <Dropdown.Item
                        onClick={() => {
                            dispatch(resetUserState());
                        }}
                    >
                        Log Out
                    </Dropdown.Item>
                )}
            </Dropdown>
        </div>
    );
};

export const PageHeader = () => {
    return (
        <Navbar fluid rounded>
            <span className="flex gap-10 items-center">
                <Brand />
                <SearchBar />
            </span>
            <ProfileDropdown />
        </Navbar>
    );
};
