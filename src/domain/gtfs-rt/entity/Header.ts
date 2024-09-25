export class Header {
    private readonly _gtfsRealtimeVersion: string
    private readonly _incrementality: number
    private readonly _timestamp: number

    constructor(
        gtfsRealtimeVersion: string,
        incrementality: number,
        timestamp: number
    ) {
        this._gtfsRealtimeVersion = gtfsRealtimeVersion
        this._incrementality = incrementality
        this._timestamp = timestamp
    }

    get gtfsRealtimeVersion(): string {
        return this._gtfsRealtimeVersion
    }

    get incrementality(): number {
        return this._incrementality
    }

    get timestamp(): number {
        return this._timestamp
    }
}
