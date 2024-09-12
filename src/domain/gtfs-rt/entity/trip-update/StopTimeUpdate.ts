import {Arrival} from "./Arrival";

export class StopTimeUpdate
{
    private readonly _scheduleRelationship: number;
    private readonly _stopSequence: number;
    private readonly _stopId: string;
    private readonly _arrival: Arrival;

    constructor(scheduleRelationship: number, stopSequence: number, stopId: string, arrival: Arrival) {
        this._scheduleRelationship = scheduleRelationship;
        this._stopSequence = stopSequence;
        this._stopId = stopId;
        this._arrival = arrival;
    }

    get scheduleRelationship(): number {
        return this._scheduleRelationship;
    }

    get stopSequence(): number {
        return this._stopSequence;
    }

    get stopId(): string {
        return this._stopId;
    }

    get arrival(): Arrival {
        return this._arrival;
    }
}