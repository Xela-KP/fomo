import { Navbar, Dropdown, Avatar, TextInput, Button } from 'flowbite-react';
import { FormEventHandler, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Brand = () => (
    <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Marites
        </span>
    </Navbar.Brand>
);

const SearchBar = () => {
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
    };
    const [search, setSearch] = useState('');
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Search..."
                rightIcon={AiOutlineSearch}
                className=""
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
};

// const NavElements = () => (
//     <>
//         <Navbar.Toggle />
//         <Navbar.Collapse>
//             <Navbar.Link>
//                 <Link to="/friends">Friends</Link>
//             </Navbar.Link>
//             <Navbar.Link>
//                 <Link to="/events">Events</Link>
//             </Navbar.Link>
//         </Navbar.Collapse>
//     </>
// );

const ProfileDropdown = (
    { profileUrl } = {
        profileUrl:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    }
) => {
    return (
        <div className="md:order-2">
            <Dropdown
                arrowIcon={false}
                inline
                label={<Avatar alt="User settings" img={profileUrl} rounded />}
            >
                <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">
                        example@email.com
                    </span>
                </Dropdown.Header>
                <Link to="profile">
                    <Dropdown.Item>Profile</Dropdown.Item>
                </Link>

                <Dropdown.Divider />
                <Link to="login">
                    <Dropdown.Item>Login</Dropdown.Item>
                </Link>
                <Link to="signup">
                    <Dropdown.Item href="/login">Sign Up</Dropdown.Item>
                </Link>
            </Dropdown>
        </div>
    );
};

export default () => {
    return (
        <Navbar fluid rounded>
            <Brand />
            <SearchBar />
            <ProfileDropdown profileUrl={''} />
            {/* <NavElements /> */}
        </Navbar>
    );
};
