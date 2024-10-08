import { Entity } from '../../../Contracts'

export class CalendarDate extends Entity {
    private readonly _id: number
    private readonly _serviceId: string
    private readonly _date: string
    private readonly _exceptionType: number

    constructor(
        id: number,
        serviceId: string,
        date: string,
        exceptionType: number
    ) {
        super()
        this._id = id
        this._serviceId = serviceId
        this._date = date
        this._exceptionType = exceptionType
    }

    get id(): number {
        return this._id
    }

    get serviceId(): string {
        return this._serviceId
    }

    get date(): string {
        return this._date
    }

    get exceptionType(): number {
        return this._exceptionType
    }
}
