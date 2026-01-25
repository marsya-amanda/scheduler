export type Event = {
    id: string;
    title: string;
    dateCreated: string;
    status: boolean;
    pinned: boolean;
    bestAvailability: string | null;
    numParticipants: number;
    numAvailable: number;
    numResponded: number;
    tag: string | null;
    link: string;
    participants: string[];
}