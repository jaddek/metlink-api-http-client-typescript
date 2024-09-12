
export class Position {
    private readonly _bearing: number;
    private readonly _latitude: number;
    private readonly _longitude: number;

    constructor(bearing: number, latitude: number, longitude: number) {
        this._bearing = bearing;
        this._latitude = latitude;
        this._longitude = longitude;
    }

    get bearing(): number {
        return this._bearing;
    }

    get latitude(): number {
        return this._latitude;
    }

    get longitude(): number {
        return this._longitude;
    }
}