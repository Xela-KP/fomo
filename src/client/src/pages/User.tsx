import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../types/user';
import Profile from './Profile';

export default function () {
    const emptyUser: User = {
        _id: '',
        username: '',
        email: '',
        password: '',
        profilePicture: '',
        bio: '',
        about: '',
        links: [],
        createdAt: '',
    };
    const { username } = useParams<string>();
    const [user, setUser] = useState<User>(emptyUser);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const req: RequestInit = {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                };
                const res = await fetch(`/api/user/${username}`, req);
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    });
    return <Profile user={user} />;
}
