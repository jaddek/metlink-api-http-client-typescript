import {
    GTFSInterface,
    GTFSRealTimeInterface,
    HeadersDictInterface,
    HostInterface,
    StopDeparturePredictionsInterface,
    TripCancellationInterface,
    TripCancellationQueryInterface
} from "./Contracts";
import {QueryBuilder} from "./QueryBuilder";

export default class HttpClient
    implements TripCancellationInterface,
        StopDeparturePredictionsInterface,
        GTFSRealTimeInterface,
        GTFSInterface {

    private readonly _headers: HeadersDictInterface;
    private readonly _host: HostInterface;

    constructor(
        host: HostInterface,
        headers: HeadersDictInterface
    ) {
        this._host = host;
        this._headers = {...this.headers, ...headers};
    }

    private getHostFullPath(path: string): string {
        return this._host.getPath() + path.replace("Async", "");
    }

    get headers(): HeadersDictInterface {
        return this._headers;
    }

    async getAgency(): Promise<Response> {
        const url: string = this.getHostFullPath("/gtfs/agency");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getCalendar(): Promise<Response> {
        const url: string = this.getHostFullPath("/gtfs/calendar");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getCalendarDates(): Promise<Response> {
        const url: string = this.getHostFullPath("/gtfs/calendar_dates");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getFeedInfo(): Promise<Response> {
        const url: string = this.getHostFullPath("/gtfs/feed_info");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getRoutes(
        routeId: string | null = null
    ): Promise<Response> {
        const url: string = this.getHostFullPath("/gtfs/routes");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getShapes(
        shapeId: string,
    ): Promise<Response> {
        const url: string = this.getHostFullPath("/gtfs/shapes");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getStopTimes(
        tripId: string,
    ): Promise<Response> {
        const url: string = this.getHostFullPath("/gtfs/shop_times");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getStops(
        routeId: string | null = null,
        tripId: string | null = null,
    ): Promise<Response> {
        const url: string = this.getHostFullPath("/gtfs/stops");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getTransfers(): Promise<Response> {
        const url: string = this.getHostFullPath("/gtfs/transfers");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getTrips(
        start: string | null = null,
        extraFields: string | null = null,
        routeId: string | null = null,
        tripId: string | null = null,
        end: string | null = null,
    ): Promise<Response> {
        const url: string = this.getHostFullPath("/gtfs/trips");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getServiceAlerts(
        useProtoBuf: boolean = false,
    ): Promise<Response> {
        const url: string = this.getHostFullPath("/gtfs-rt/servicealerts");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getTripUpdates(
        useProtoBuf: boolean = false,
    ): Promise<Response> {
        const url: string = this.getHostFullPath("/gtfs-rt/tripupdates");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getVehiclePositions(
        useProtoBuf: boolean = false,
    ): Promise<Response> {
        const url: string = this.getHostFullPath("/gtfs-rt/vehiclepositions");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getStopPredictions(
        stopId: string | null = null,
    ): Promise<Response> {
        const url: string = this.getHostFullPath("/stop-predictions");
        const res: Response = await fetch(url);

        return await res.json();
    }

    async getTripCancellation(
        query: TripCancellationQueryInterface | null = null,
    ): Promise<Response> {
        let searchParams: URLSearchParams = QueryBuilder.buildQuery(query);
        const url: string = this.getHostFullPath("/trip-cancellations");
        const res: Response = await fetch(url);

        return await res.json();
    }
}