export type Event = {
    id: string;
    title: string;
    pinned: boolean;
    dateCreated: string;
    startDate: string;
    endDate: string;
    status: boolean;
    bestAvailability: string | null;
    participants: object[];
    numParticipants: number;
    numResponded: number;
    numAvailable: number;
    tag: string | null;
    link: string | null;
}