
export class Trip {
    private readonly _startTime: string;
    private readonly _tripId: string;
    private readonly _directionId: number;
    private readonly _routeId: number;
    private readonly _scheduleRelationship: number;
    private readonly _startDate: string;

    constructor(
        startTime: string,
        tripId: string,
        directionId: number,
        routeId: number,
        scheduleRelationship: number,
        startDate: string
    ) {
        this._startTime = startTime;
        this._tripId = tripId;
        this._directionId = directionId;
        this._routeId = routeId;
        this._scheduleRelationship = scheduleRelationship;
        this._startDate = startDate;
    }


    get startTime(): string {
        return this._startTime;
    }

    get tripId(): string {
        return this._tripId;
    }

    get directionId(): number {
        return this._directionId;
    }

    get routeId(): number {
        return this._routeId;
    }

    get scheduleRelationship(): number {
        return this._scheduleRelationship;
    }

    get startDate(): string {
        return this._startDate;
    }
}