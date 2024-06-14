import type { User } from './user';

export enum Visibility {
    Public = 'public',
    Private = 'private',
}
export type Event = {
    hostId: User;
    name: string;
    about: string;
    summary?: string;
    startDate: Date;
    endDate: Date;
    location: Location;
    links?: string[];
    visibility: Visibility;
};
