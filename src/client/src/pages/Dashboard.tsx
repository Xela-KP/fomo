import Sidebar from '../components/dashboard/Sidebar';
import Profile from './Profile';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Friends from '../components/dashboard/Friends';
import Settings from '../components/dashboard/Settings';
import Inbox from '../components/dashboard/Inbox';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { User } from '../types/user';

export default () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    const [tab, setTab] = useState('');
    const location = useLocation();

    const getComponent = (tab: string) => {
        switch (tab) {
            case 'friends':
                return <Friends />;
            case 'inbox':
                return <Inbox />;
            case 'settings':
                return <Settings />;
            default:
                return <Profile user={currentUser as User} />;
        }
    };
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        setTab(tabFromUrl as string);
    }, [location.search]);
    return (
        <div className="flex flex-row min-h-screen">
            <Sidebar tab={tab} />
            {getComponent(tab)}
        </div>
    );
};
