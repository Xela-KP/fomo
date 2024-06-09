import InformationCard from './profile/InformationCard';
import ProfileCard from './profile/ProfileCard';
import LinksCard from './profile/LinksCard';

export default () => (
    <div className="flex lg:flex-row flex-col flex-grow gap-2 p-6">
        <div className="flex basis-1/4 flex-col gap-2 w-full">
            <ProfileCard />
            <LinksCard />
        </div>
        <div className="flex basis-3/4 flex-col gap-2 w-full">
            <InformationCard />
        </div>
    </div>
);
