import { Vehicle } from './Vehicle'

export class Entity {
    private readonly _id: string
    private readonly _vehicle: Vehicle

    constructor(id: string, vehicle: Vehicle) {
        this._id = id
        this._vehicle = vehicle
    }

    get id(): string {
        return this._id
    }

    get vehicle(): Vehicle {
        return this._vehicle
    }
}
