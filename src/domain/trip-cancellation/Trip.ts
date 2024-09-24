/**
 *  "id": "f17d8922-853e-4d7b-97cd-e5a2842329b0",
 *     "date_created": "2024-09-12 09:29:56",
 *     "date_updated": "2024-09-12 14:17:46",
 *     "trip_id": "930__0__101__TZM__519__1__519__1_20240825",
 *     "route_id": 9300,
 *     "trip_date_start": "2024-09-12 15:10:00",
 *     "trip_date_end": "2024-09-12 15:40:00",
 *     "direction_id": 0,
 *     "reinstated": 0,
 *     "part_cancellation": 0
 */
export class Trip {
    private readonly _id: string
    private readonly _dateCreated: string
    private readonly _dateUpdated: string
    private readonly _tripId: string
    private readonly _routeId: number
    private readonly _tripDateStart: string
    private readonly _tripDateEnd: string
    private readonly _directionId: number
    private readonly _reinstalled: number
    private readonly _partCancellation: number

    constructor(
        id: string,
        dateCreated: string,
        dateUpdated: string,
        tripId: string,
        routeId: number,
        tripDateStart: string,
        tripDateEnd: string,
        directionId: number,
        reinstalled: number,
        partCancellation: number
    ) {
        this._id = id
        this._dateCreated = dateCreated
        this._dateUpdated = dateUpdated
        this._tripId = tripId
        this._routeId = routeId
        this._tripDateStart = tripDateStart
        this._tripDateEnd = tripDateEnd
        this._directionId = directionId
        this._reinstalled = reinstalled
        this._partCancellation = partCancellation
    }

    get id(): string {
        return this._id
    }

    get dateCreated(): string {
        return this._dateCreated
    }

    get dateUpdated(): string {
        return this._dateUpdated
    }

    get tripId(): string {
        return this._tripId
    }

    get routeId(): number {
        return this._routeId
    }

    get tripDateStart(): string {
        return this._tripDateStart
    }

    get tripDateEnd(): string {
        return this._tripDateEnd
    }

    get directionId(): number {
        return this._directionId
    }

    get reinstalled(): number {
        return this._reinstalled
    }

    get partCancellation(): number {
        return this._partCancellation
    }
}
