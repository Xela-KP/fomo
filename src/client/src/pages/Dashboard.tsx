import Sidebar from '../components/dashboard/Sidebar';
import Profile from '../components/dashboard/Profile';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Friends from '../components/dashboard/Friends';
import Settings from '../components/dashboard/Settings';
import Inbox from '../components/dashboard/Inbox';

const getComponent = (tab: string) => {
    switch (tab) {
        case 'friends':
            return <Friends />;
        case 'inbox':
            return <Inbox />;
        case 'settings':
            return <Settings />;
        default:
            return <Profile />;
    }
};

export default () => {
    const [tab, setTab] = useState('');
    const location = useLocation();
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        setTab(tabFromUrl as string);
    }, [location.search]);
    return (
        <div className="grid grid-cols-2 min-h-screen">
            <Sidebar tab={tab} />
            {getComponent(tab)}
        </div>
    );
};
