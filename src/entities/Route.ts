/**
 *     "id": 41,
 *     "route_id": "520",
 *     "agency_id": "MNM",
 *     "route_short_name": "52",
 *     "route_long_name": "Johnsonville - Newlands - Wellington",
 *     "route_desc": "Wellington - Newlands - Johnsonville",
 *     "route_type": 3,
 *     "route_color": "308ad9",
 *     "route_text_color": "000000",
 *     "route_url": "",
 *     "route_sort_order": 520
 */
export class Route extends Entity {
    private readonly _id: number;
    private readonly _routeId: string;
    private readonly _agencyId: string;
    private readonly _routeShortName: string;
    private readonly _routeLongName: string;
    private readonly _routeDesc: string;
    private readonly _routeType: number;
    private readonly _routeColor: string;
    private readonly _routeTextColor: string;
    private readonly _routeUrl: string;
    private readonly _routeSortOrder: number;

    constructor(id: number, routeId: string, agencyId: string, routeShortName: string, routeLongName: string, routeDesc: string, routeType: number, routeColor: string, routeTextColor: string, routeUrl: string, routeSortOrder: number) {
        super();
        this._id = id;
        this._routeId = routeId;
        this._agencyId = agencyId;
        this._routeShortName = routeShortName;
        this._routeLongName = routeLongName;
        this._routeDesc = routeDesc;
        this._routeType = routeType;
        this._routeColor = routeColor;
        this._routeTextColor = routeTextColor;
        this._routeUrl = routeUrl;
        this._routeSortOrder = routeSortOrder;
    }

    get id(): number {
        return this._id;
    }

    get routeId(): string {
        return this._routeId;
    }

    get agencyId(): string {
        return this._agencyId;
    }

    get routeShortName(): string {
        return this._routeShortName;
    }

    get routeLongName(): string {
        return this._routeLongName;
    }

    get routeDesc(): string {
        return this._routeDesc;
    }

    get routeType(): number {
        return this._routeType;
    }

    get routeColor(): string {
        return this._routeColor;
    }

    get routeTextColor(): string {
        return this._routeTextColor;
    }

    get routeUrl(): string {
        return this._routeUrl;
    }

    get routeSortOrder(): number {
        return this._routeSortOrder;
    }
}