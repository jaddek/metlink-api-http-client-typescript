export class Arrival {
    private readonly _delay: number
    private readonly _time: number

    constructor(delay: number, time: number) {
        this._delay = delay
        this._time = time
    }

    get delay(): number {
        return this._delay
    }

    get time(): number {
        return this._time
    }
}
