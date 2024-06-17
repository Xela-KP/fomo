export default interface Event {
    hostId: string;
    summary: string;
    description: string;
    visibility: string;
    location: Location;
    startDate: Date;
    endDate: Date;
}
