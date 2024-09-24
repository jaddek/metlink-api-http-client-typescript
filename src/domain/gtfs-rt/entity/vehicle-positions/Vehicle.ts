import {VehicleId} from "./VehicleId";
import {Position} from "./Position";
import {Trip} from "./Trip";

export class Vehicle {
    private readonly _trip: Trip;
    private readonly _position: Position;
    private readonly _vehicle: VehicleId;
    private readonly _occupancyStatus: number;
    private readonly _timestamp: number;

    constructor(
        trip: Trip,
        position: Position,
        vehicle: VehicleId,
        occupancyStatus: number,
        timestamp: number
    ) {
        this._trip = trip;
        this._position = position;
        this._vehicle = vehicle;
        this._occupancyStatus = occupancyStatus;
        this._timestamp = timestamp;
    }

    get trip(): Trip {
        return this._trip;
    }

    get position(): Position {
        return this._position;
    }

    get vehicle(): VehicleId {
        return this._vehicle;
    }

    get occupancyStatus(): number {
        return this._occupancyStatus;
    }

    get timestamp(): number {
        return this._timestamp;
    }
}