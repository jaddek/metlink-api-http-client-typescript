export class ActivePeriod {
    private readonly _start: number;
    private readonly _end: number;

    constructor(start: number, end: number) {
        this._start = start;
        this._end = end;
    }

    get start(): number {
        return this._start;
    }

    get end(): number {
        return this._end;
    }
}