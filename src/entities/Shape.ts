/**
 *     "id": 1,
 *     "shape_id": "shape_id",
 *     "shape_pt_lat": 10.10201,
 *     "shape_pt_lon": 11.80502,
 *     "shape_pt_sequence": 0,
 *     "shape_dist_traveled": 0
 */
export class Shape extends Entity {
    private readonly _id: number;
    private readonly _shapeId: string;
    private readonly _shapePtLat: number;
    private readonly _shapePtLon: number;
    private readonly _shapePtSequence: number;
    private readonly _shapeDistTraveled: number;

    constructor(id: number, shapeId: string, shapePtLat: number, shapePtLon: number, shapePtSequence: number, shapeDistTraveled: number) {
        super();
        this._id = id;
        this._shapeId = shapeId;
        this._shapePtLat = shapePtLat;
        this._shapePtLon = shapePtLon;
        this._shapePtSequence = shapePtSequence;
        this._shapeDistTraveled = shapeDistTraveled;
    }

    get id(): number {
        return this._id;
    }

    get shapeId(): string {
        return this._shapeId;
    }

    get shapePtLat(): number {
        return this._shapePtLat;
    }

    get shapePtLon(): number {
        return this._shapePtLon;
    }

    get shapePtSequence(): number {
        return this._shapePtSequence;
    }

    get shapeDistTraveled(): number {
        return this._shapeDistTraveled;
    }
}