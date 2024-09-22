export class Trip
{
    private readonly _startTime:string;
    private readonly _description:string;
    private readonly _tripId:string;
    private readonly _directionId:number;
    private readonly _routeId:number;
    private readonly _startDate:string;

    constructor(
        startTime: string,
        description: string,
        tripId: string,
        directionId: number,
        routeId: number,
        startId: string
    ) {
        this._startTime = startTime;
        this._description = description;
        this._tripId = tripId;
        this._directionId = directionId;
        this._routeId = routeId;
        this._startDate = startId;
    }

    get startTime(): string {
        return this._startTime;
    }

    get description(): string {
        return this._description;
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

    get startDate(): string {
        return this._startDate;
    }
}