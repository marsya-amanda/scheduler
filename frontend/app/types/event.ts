import { Matrix } from './matrix';

export type Event = {
    id: string;
    title: string;
    pinned: boolean;
    dateCreated: string;
    startDate: string;
    endDate: string;
    timeRangeStart: string;
    timeRangeEnd: string;
    duration: number;
    responseDeadline: string;
    status: boolean;
    bestAvailability: string | null;
    participants: object[];
    numParticipants: number;
    numResponded: number;
    numAvailable: number;
    tag: string | null;
    link: string | null;
    singleDayAvail: boolean;
    blockAdminAvail: boolean;
    sendReminder: boolean;
    timeslotMatrix: Matrix
}