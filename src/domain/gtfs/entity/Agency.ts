import { Entity } from '../../../Contracts'

export class Agency extends Entity {
    private readonly _id: number
    private readonly _agencyId: string
    private readonly _agencyName: string
    private readonly _agencyTimeZone: string
    private readonly _agencyUrl: string
    private readonly _agencyLang: string
    private readonly _agencyPhone: string
    private readonly _agencyFareUrl: string

    constructor(
        id: number,
        agencyId: string,
        agencyName: string,
        agencyTimeZone: string,
        agencyUrl: string,
        agencyLang: string,
        agencyPhone: string,
        agencyFareUrl: string
    ) {
        super()
        this._id = id
        this._agencyId = agencyId
        this._agencyName = agencyName
        this._agencyTimeZone = agencyTimeZone
        this._agencyUrl = agencyUrl
        this._agencyLang = agencyLang
        this._agencyPhone = agencyPhone
        this._agencyFareUrl = agencyFareUrl
    }

    get id(): number {
        return this._id
    }

    get agencyId(): string {
        return this._agencyId
    }

    get agencyName(): string {
        return this._agencyName
    }

    get agencyTimeZone(): string {
        return this._agencyTimeZone
    }

    get agencyUrl(): string {
        return this._agencyUrl
    }

    get agencyLang(): string {
        return this._agencyLang
    }

    get agencyPhone(): string {
        return this._agencyPhone
    }

    get agencyFareUrl(): string {
        return this._agencyFareUrl
    }
}
