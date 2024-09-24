export class Departure {
    private readonly _aimed: string
    private readonly _expected: string

    constructor(aimed: string, expected: string) {
        this._aimed = aimed
        this._expected = expected
    }

    get aimed(): string {
        return this._aimed
    }

    get expected(): string {
        return this._expected
    }
}
