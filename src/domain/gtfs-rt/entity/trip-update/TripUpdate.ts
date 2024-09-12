import {StopTimeUpdate} from "./StopTimeUpdate";
import {Trip} from "./Trip";
import {Vehicle} from "../vehicle-positions/Vehicle";

export class TripUpdate
{
    private readonly _stopTimeUpdate: StopTimeUpdate;
    private readonly _trip: Trip;
    private readonly _vehicle: Vehicle;
    private readonly _timestamp: number;

    constructor(stopTimeUpdate: StopTimeUpdate, trip: Trip, vehicle: Vehicle, timestamp: number) {
        this._stopTimeUpdate = stopTimeUpdate;
        this._trip = trip;
        this._vehicle = vehicle;
        this._timestamp = timestamp;
    }

    get stopTimeUpdate(): StopTimeUpdate {
        return this._stopTimeUpdate;
    }

    get trip(): Trip {
        return this._trip;
    }

    get vehicle(): Vehicle {
        return this._vehicle;
    }

    get timestamp(): number {
        return this._timestamp;
    }
}