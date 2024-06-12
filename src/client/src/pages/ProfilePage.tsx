import { InformationCard } from '../components/dashboard/profile/InformationCard';
import { LinksCard } from '../components/dashboard/profile/LinksCard';
import { ProfileCard } from '../components/dashboard/profile/ProfileCard';
import type { User } from '../types/user';

export const ProfilePage = ({ user }: { user: User }) => {
    return (
        <div className="flex lg:flex-row flex-col flex-grow gap-2 p-6">
            <div className="flex basis-1/4 flex-col gap-2 w-full">
                <ProfileCard user={user} />
                <LinksCard user={user} />
            </div>
            <div className="flex basis-3/4 flex-col gap-2 w-full">
                <InformationCard user={user} />
            </div>
        </div>
    );
};
