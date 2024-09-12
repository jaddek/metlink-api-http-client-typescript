import {TripUpdate} from "./TripUpdate";

export class Entity
{
    private readonly _id: string;
    private readonly _tripUpdate: TripUpdate;

    constructor(id: string, tripUpdate: TripUpdate) {
        this._id = id;
        this._tripUpdate = tripUpdate;
    }

    get id(): string {
        return this._id;
    }

    get tripUpdate(): TripUpdate {
        return this._tripUpdate;
    }
}