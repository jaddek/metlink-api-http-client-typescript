/**
 *  "id": 1,
 *     "stop_id": "7951",
 *     "stop_code": "7951",
 *     "stop_name": "Buckley Road (near 108)",
 *     "stop_desc": "",
 *     "zone_id": "3",
 *     "stop_lat": -41.33689713,
 *     "stop_lon": 174.7827608,
 *     "location_type": 0,
 *     "parent_station": "",
 *     "stop_url": "",
 *     "stop_timezone": "Pacific/Auckland"
 */
export class Stop extends Entity {
    private readonly _id: number;
    private readonly _stopId: string;
    private readonly _stopCode: string;
    private readonly _stopName: string;
    private readonly _stopDesc: string;
    private readonly _zoneId: string;
    private readonly _stopLat: number;
    private readonly _stopLon: number;
    private readonly _locationType: number;
    private readonly _parentStation: string;
    private readonly _stopUrl: string;
    private readonly _stopTimezone: string;

    constructor(
        id: number,
        stopId: string,
        stopCode: string,
        stopName: string,
        stopDesc: string,
        zoneId: string,
        stopLat: number,
        stopLon: number,
        locationType: number,
        parentStation: string,
        stopUrl: string,
        stopTimezone: string
    ) {
        super();
        this._id = id;
        this._stopId = stopId;
        this._stopCode = stopCode;
        this._stopName = stopName;
        this._stopDesc = stopDesc;
        this._zoneId = zoneId;
        this._stopLat = stopLat;
        this._stopLon = stopLon;
        this._locationType = locationType;
        this._parentStation = parentStation;
        this._stopUrl = stopUrl;
        this._stopTimezone = stopTimezone;
    }

    get id(): number {
        return this._id;
    }

    get stopId(): string {
        return this._stopId;
    }

    get stopCode(): string {
        return this._stopCode;
    }

    get stopName(): string {
        return this._stopName;
    }

    get stopDesc(): string {
        return this._stopDesc;
    }

    get zoneId(): string {
        return this._zoneId;
    }

    get stopLat(): number {
        return this._stopLat;
    }

    get stopLon(): number {
        return this._stopLon;
    }

    get locationType(): number {
        return this._locationType;
    }

    get parentStation(): string {
        return this._parentStation;
    }

    get stopUrl(): string {
        return this._stopUrl;
    }

    get stopTimezone(): string {
        return this._stopTimezone;
    }
}