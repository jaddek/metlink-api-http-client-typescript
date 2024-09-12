import {Entity} from "../../../Contracts";

/**
 *     "id": 1,
 *     "route_id": 0,
 *     "service_id": "service_id",
 *     "trip_id": "trip_id",
 *     "trip_headsign": "",
 *     "direction_id": 0,
 *     "block_id": "",
 *     "shape_id": "shape_id",
 *     "wheelchair_accessible": 0,
 *     "bikes_allowed": 2,
 *     "origin_stop_id": null,
 *     "destination_stop_id": null
 */
export class Trip extends Entity {
    private readonly _id: number;
    private readonly _routeId: number;
    private readonly _serviceId: string;
    private readonly _tripId: string;
    private readonly _tripHeadSign: string;
    private readonly _directionId: number;
    private readonly _blockId: string;
    private readonly _shapeId: string;
    private readonly _wheelChairAccesible: number;
    private readonly _bikesAllowed: number;
    private readonly _originStopId: null | number;
    private readonly _destinationStopId: null | number;

    constructor(id: number, routeId: number, serviceId: string, tripId: string, tripHeadSign: string, directionId: number, blockId: string, shapeId: string, wheelChairAccesible: number, bikesAllowed: number, originStopId: number | null, destinationStopId: number | null) {
        super();
        this._id = id;
        this._routeId = routeId;
        this._serviceId = serviceId;
        this._tripId = tripId;
        this._tripHeadSign = tripHeadSign;
        this._directionId = directionId;
        this._blockId = blockId;
        this._shapeId = shapeId;
        this._wheelChairAccesible = wheelChairAccesible;
        this._bikesAllowed = bikesAllowed;
        this._originStopId = originStopId;
        this._destinationStopId = destinationStopId;
    }

    get id(): number {
        return this._id;
    }

    get routeId(): number {
        return this._routeId;
    }

    get serviceId(): string {
        return this._serviceId;
    }

    get tripId(): string {
        return this._tripId;
    }

    get tripHeadSign(): string {
        return this._tripHeadSign;
    }

    get directionId(): number {
        return this._directionId;
    }

    get blockId(): string {
        return this._blockId;
    }

    get shapeId(): string {
        return this._shapeId;
    }

    get wheelChairAccesible(): number {
        return this._wheelChairAccesible;
    }

    get bikesAllowed(): number {
        return this._bikesAllowed;
    }

    get originStopId(): number | null {
        return this._originStopId;
    }

    get destinationStopId(): number | null {
        return this._destinationStopId;
    }
}