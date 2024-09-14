import {
    GTFSInterface,
    GTFSRealTimeInterface,
    StopDeparturePredictionsInterface,
    TripCancellationInterface,
    TripCancellationQueryInterface
} from "./Contracts";
import {QueryBuilder} from "./QueryBuilder";
import {HttpClientInterface} from "./domain/httpclient/HttpClientInterface";

export default class MetlinkHttpClient
    implements TripCancellationInterface,
        StopDeparturePredictionsInterface,
        GTFSRealTimeInterface,
        GTFSInterface {

    private readonly httpClientAdapter: HttpClientInterface;

    constructor(
        httpClient: HttpClientInterface,
    ) {
        this.httpClientAdapter = httpClient;
    }

    private async doGetFetch(path: string) {
        return await this.httpClientAdapter.get(path);
    }

    public static getAgenciesPath(): string {
        return "/gtfs/agency";
    }

    public static getCalendarPath(): string {
        return "/gtfs/calendar";
    }

    public static getCalendarDatesPath(): string {
        return "/gtfs/calendar_dates";
    }

    public static getFeedInfoPath(): string {
        return "/gtfs/feed_info";
    }

    async getAgencies(): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getAgenciesPath());
    }

    async getCalendar(): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getCalendarPath());
    }

    async getCalendarDates(): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getCalendarDatesPath());
    }

    async getFeedInfo(): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getFeedInfoPath());
    }

    async getRoutes(
        routeId: string | null = null
    ): Promise<any> {
        return await this.doGetFetch("/gtfs/routes");
    }

    async getShapes(
        shapeId: string,
    ): Promise<any> {
        return await this.doGetFetch("/gtfs/shapes");
    }

    async getStopTimes(
        tripId: string,
    ): Promise<any> {
        return await this.doGetFetch("/gtfs/shop_times");
    }

    async getStops(
        routeId: string | null = null,
        tripId: string | null = null,
    ): Promise<any> {
        return await this.doGetFetch("/gtfs/stops");
    }

    async getTransfers(): Promise<any> {
        return await this.doGetFetch("/gtfs/transfers");
    }

    async getTrips(
        start: string | null = null,
        extraFields: string | null = null,
        routeId: string | null = null,
        tripId: string | null = null,
        end: string | null = null,
    ): Promise<any> {
        return await this.doGetFetch("/gtfs/trips");
    }

    async getServiceAlerts(
        useProtoBuf: boolean = false,
    ): Promise<any> {
        return await this.doGetFetch("/gtfs-rt/servicealerts");
    }

    async getTripUpdates(
        useProtoBuf: boolean = false,
    ): Promise<any> {
        return await this.doGetFetch("/gtfs-rt/tripupdates");
    }

    async getVehiclePositions(
        useProtoBuf: boolean = false,
    ): Promise<any> {
        return await this.doGetFetch("/gtfs-rt/vehiclepositions");
    }

    async getStopPredictions(
        stopId: string | null = null,
    ): Promise<any> {
        return await this.doGetFetch("/stop-predictions");
    }

    async getTripCancellation(
        query: TripCancellationQueryInterface | null = null,
    ): Promise<any> {
        let searchParams: URLSearchParams = QueryBuilder.buildQuery(query);

        return await this.doGetFetch("/trip-cancellations" + searchParams.toString());
    }
}