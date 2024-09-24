import { TripCancellationQueryInterface } from '../../Contracts'

export class Query implements TripCancellationQueryInterface {
    private _dateUpdated: string | null = null
    private _dateUpdatedMax: string | null = null
    private _reinstated: string | null = null
    private _dateStart: string | null = null
    private _dateEnd: string | null = null
    private _partCancellation: string | null = null
    private _dateCreated: string | null = null
    private _routeId: string | null = null
    private _tripId: string | null = null
    private _dateCratedMax: string | null = null

    get dateUpdated(): string | null {
        return this._dateUpdated
    }

    set dateUpdated(value: string | null) {
        this._dateUpdated = value
    }

    get dateUpdatedMax(): string | null {
        return this._dateUpdatedMax
    }

    set dateUpdatedMax(value: string | null) {
        this._dateUpdatedMax = value
    }

    get reinstated(): string | null {
        return this._reinstated
    }

    set reinstated(value: string | null) {
        this._reinstated = value
    }

    get dateStart(): string | null {
        return this._dateStart
    }

    set dateStart(value: string | null) {
        this._dateStart = value
    }

    get dateEnd(): string | null {
        return this._dateEnd
    }

    set dateEnd(value: string | null) {
        this._dateEnd = value
    }

    get partCancellation(): string | null {
        return this._partCancellation
    }

    set partCancellation(value: string | null) {
        this._partCancellation = value
    }

    get dateCreated(): string | null {
        return this._dateCreated
    }

    set dateCreated(value: string | null) {
        this._dateCreated = value
    }

    get routeId(): string | null {
        return this._routeId
    }

    set routeId(value: string | null) {
        this._routeId = value
    }

    get tripId(): string | null {
        return this._tripId
    }

    set tripId(value: string | null) {
        this._tripId = value
    }

    get dateCreatedMax(): string | null {
        return this._dateCratedMax
    }

    set dateCreatedMax(value: string | null) {
        this._dateCratedMax = value
    }
}
