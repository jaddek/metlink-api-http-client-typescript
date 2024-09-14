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

    public static getRoutesPath(): string {
        return "/gtfs/routes";
    }

    public static getStopTimesPath(): string {
        return "/gtfs/shop_times";
    }

    public static getShapesPath(): string {
        return "/gtfs/shapes";
    }

    public static getStopsPath(): string {
        return "/gtfs/stops";
    }

    public static getTransfersPath(): string {
        return "/gtfs/transfers";
    }

    public static getTripsPath(): string {
        return "/gtfs/trips";
    }

    public static getServiceAlertsPath(): string
    {
        return "/gtfs-rt/servicealerts";
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
        return await this.doGetFetch(MetlinkHttpClient.getRoutesPath());
    }

    async getShapes(
        shapeId: string,
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getShapesPath());
    }

    async getStopTimes(
        tripId: string,
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getStopTimesPath());
    }

    async getStops(
        routeId: string | null = null,
        tripId: string | null = null,
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getStopsPath());
    }

    async getTransfers(): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getTransfersPath());
    }

    async getTrips(
        start: string | null = null,
        extraFields: string | null = null,
        routeId: string | null = null,
        tripId: string | null = null,
        end: string | null = null,
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getTripsPath());
    }

    async getServiceAlerts(
        useProtoBuf: boolean = false,
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getServiceAlertsPath());
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