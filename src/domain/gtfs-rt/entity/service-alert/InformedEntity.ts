import {Trip} from "./Trip";

export class InformedEntity {
    private readonly _routeId: string;
    private readonly _routeType: number;
    private readonly _stopId: string | null;
    private readonly _trip: Trip | null;

    constructor(
        routeId: string,
        routeType: number,
        stopId: string | null,
        trip: Trip | null
    ) {
        this._routeId = routeId;
        this._routeType = routeType;
        this._stopId = stopId;
        this._trip = trip;
    }

    get routeId(): string {
        return this._routeId;
    }

    get routeType(): number {
        return this._routeType;
    }

    get stopId(): string | null {
        return this._stopId;
    }

    get trip(): Trip | null {
        return this._trip;
    }
}