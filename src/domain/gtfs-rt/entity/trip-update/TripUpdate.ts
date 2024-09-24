import { StopTimeUpdate } from './StopTimeUpdate'
import { Trip } from './Trip'
import { VehicleId } from './VehicleId'

export class TripUpdate {
    private readonly _stopTimeUpdate: StopTimeUpdate
    private readonly _trip: Trip
    private readonly _vehicle: VehicleId
    private readonly _timestamp: number

    constructor(
        stopTimeUpdate: StopTimeUpdate,
        trip: Trip,
        vehicle: VehicleId,
        timestamp: number
    ) {
        this._stopTimeUpdate = stopTimeUpdate
        this._trip = trip
        this._vehicle = vehicle
        this._timestamp = timestamp
    }

    get stopTimeUpdate(): StopTimeUpdate {
        return this._stopTimeUpdate
    }

    get trip(): Trip {
        return this._trip
    }

    get vehicle(): VehicleId {
        return this._vehicle
    }

    get timestamp(): number {
        return this._timestamp
    }
}
