import { Arrival } from './Arrival'

export class StopTimeUpdate {
    private readonly _scheduleRelationship: number
    private readonly _stopSequence: number
    private readonly _stopId: string
    private readonly _arrival: Arrival

    constructor(
        scheduleRelationship: number,
        stopSequence: number,
        arrival: Arrival,
        stopId: string
    ) {
        this._scheduleRelationship = scheduleRelationship
        this._stopSequence = stopSequence
        this._arrival = arrival
        this._stopId = stopId
    }

    get scheduleRelationship(): number {
        return this._scheduleRelationship
    }

    get stopSequence(): number {
        return this._stopSequence
    }

    get stopId(): string {
        return this._stopId
    }

    get arrival(): Arrival {
        return this._arrival
    }
}
