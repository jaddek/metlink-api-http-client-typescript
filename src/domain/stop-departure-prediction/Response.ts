import { ResponseDTO } from '../../Contracts'
import { Entity } from './Entity'

export class Response implements ResponseDTO {
    private readonly _fareZone: number
    private readonly _closed: boolean
    private readonly _departures: Entity[]

    constructor(fareZone: number, closed: boolean, departures: Entity[]) {
        this._fareZone = fareZone
        this._closed = closed
        this._departures = departures
    }

    get fareZone(): number {
        return this._fareZone
    }

    get closed(): boolean {
        return this._closed
    }

    get departures(): Entity[] {
        return this._departures
    }

    isCollection(): boolean {
        return false
    }
}
