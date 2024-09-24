import { Entity } from '../../../Contracts'

export class StopTime extends Entity {
    private readonly _id: number
    private readonly _tripId: string
    private readonly _arrivalTime: string
    private readonly _departureTime: string
    private readonly _stopId: string
    private readonly _stopSequence: number
    private readonly _shapeDistTraveled: number
    private readonly _stopHeadSign: string
    private readonly _pickupType: number
    private readonly _dropOffType: number
    private readonly _timepoint: string

    constructor(
        id: number,
        tripId: string,
        arrivalTime: string,
        departureTime: string,
        stopId: string,
        stopSequence: number,
        shapeDistTraveled: number,
        stopHeadSign: string,
        pickupType: number,
        dropOffType: number,
        timepoint: string
    ) {
        super()
        this._id = id
        this._tripId = tripId
        this._arrivalTime = arrivalTime
        this._departureTime = departureTime
        this._stopId = stopId
        this._stopSequence = stopSequence
        this._shapeDistTraveled = shapeDistTraveled
        this._stopHeadSign = stopHeadSign
        this._pickupType = pickupType
        this._dropOffType = dropOffType
        this._timepoint = timepoint
    }

    get id(): number {
        return this._id
    }

    get tripId(): string {
        return this._tripId
    }

    get arrivalTime(): string {
        return this._arrivalTime
    }

    get departureTime(): string {
        return this._departureTime
    }

    get stopId(): string {
        return this._stopId
    }

    get stopSequence(): number {
        return this._stopSequence
    }

    get shapeDistTraveled(): number {
        return this._shapeDistTraveled
    }

    get stopHeadSign(): string {
        return this._stopHeadSign
    }

    get pickupType(): number {
        return this._pickupType
    }

    get dropOffType(): number {
        return this._dropOffType
    }

    get timepoint(): string {
        return this._timepoint
    }
}
