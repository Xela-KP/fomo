import { Navbar, Dropdown, Avatar, TextInput } from 'flowbite-react';
import { FormEventHandler, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Brand from './Brand';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { User } from '../types/user';

const SearchBar = () => {
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
    };
    const [search, setSearch] = useState('');
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Search Marités..."
                rightIcon={AiOutlineSearch}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
};

const ProfileDropdown = () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    const { username, profilePicture } = currentUser
        ? (currentUser as User)
        : {
              username: '',
              profilePicture:
                  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
          };
    return (
        <div className="md:order-2">
            <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar
                        alt="User settings"
                        img={profilePicture as string}
                        rounded
                    />
                }
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
                {currentUser && <Dropdown.Item>Log Out</Dropdown.Item>}
            </Dropdown>
        </div>
    );
};

export default () => {
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
