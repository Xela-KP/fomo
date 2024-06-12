import { InformationSettingsCard } from './settings/InformationSettingsCard';
import { LinksSettingsCard } from './settings/LinksSettingsCard';
import { ProfileSettingsCard } from './settings/ProfileSettingsCard';

export const Settings = () => (
    <div className="flex lg:flex-row flex-col flex-grow gap-2 p-6">
        <div className="flex basis-1/4 flex-col gap-2 w-full">
            <ProfileSettingsCard />
            <LinksSettingsCard />
        </div>
        <div className="flex basis-3/4 flex-col gap-2 w-full">
            <InformationSettingsCard />
        </div>
    </div>
);
