import { Entity } from '../../../Contracts'

export class Transfer extends Entity {
    private readonly _id: number
    private readonly _fromStopId: string
    private readonly _toStopId: string
    private readonly _transferType: string
    private readonly _minTransferTime: string
    private readonly _fromTripId: string
    private readonly _toTripId: string

    constructor(
        id: number,
        fromStopId: string,
        toStopId: string,
        transferType: string,
        minTransferTime: string,
        fromTripId: string,
        toTripId: string
    ) {
        super()
        this._id = id
        this._fromStopId = fromStopId
        this._toStopId = toStopId
        this._transferType = transferType
        this._minTransferTime = minTransferTime
        this._fromTripId = fromTripId
        this._toTripId = toTripId
    }

    get id(): number {
        return this._id
    }

    get fromStopId(): string {
        return this._fromStopId
    }

    get toStopId(): string {
        return this._toStopId
    }

    get transferType(): string {
        return this._transferType
    }

    get minTransferTime(): string {
        return this._minTransferTime
    }

    get fromTripId(): string {
        return this._fromTripId
    }

    get toTripId(): string {
        return this._toTripId
    }
}
