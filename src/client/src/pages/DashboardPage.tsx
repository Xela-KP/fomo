import { useEffect, useState } from 'react';

import { DashboardSidebar } from '@components/dashboard/Sidebar';
import { Friends } from '@components/dashboard/Friends';
import { Inbox } from '@components/dashboard/Inbox';
import { ProfilePage } from './ProfilePage';
import type { RootState } from '@redux/store';
import { Settings } from '@components/dashboard/Settings';
import type User from '@shared/models/User';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const DashboardPage = () => {
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
                return <ProfilePage user={currentUser as User} />;
        }
    };
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        setTab(tabFromUrl as string);
    }, [location.search]);
    return (
        <div className="flex flex-row min-h-screen">
            <DashboardSidebar tab={tab} />
            {getComponent(tab)}
        </div>
    );
};
