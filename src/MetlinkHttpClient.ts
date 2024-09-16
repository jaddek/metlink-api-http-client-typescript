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

    public static getGtfsAgenciesPath(): string {
        return "/gtfs/agency";
    }

    public static getGtfsCalendarPath(): string {
        return "/gtfs/calendar";
    }

    public static getGtfsCalendarDatesPath(): string {
        return "/gtfs/calendar_dates";
    }

    public static getGtfsFeedInfoPath(): string {
        return "/gtfs/feed_info";
    }

    public static getGtfsRoutesPath(): string {
        return "/gtfs/routes";
    }

    public static getGtfsStopTimesPath(): string {
        return "/gtfs/shop_times";
    }

    public static getGtfsShapesPath(): string {
        return "/gtfs/shapes";
    }

    public static getGtfsStopsPath(): string {
        return "/gtfs/stops";
    }

    public static getGtfsTransfersPath(): string {
        return "/gtfs/transfers";
    }

    public static getGtfsTripsPath(): string {
        return "/gtfs/trips";
    }

    public static getGtfsRtServiceAlertsPath(): string {
        return "/gtfs-rt/servicealerts";
    }

    public static getGtfsRtTripUpdatesPath(): string {
        return "/gtfs-rt/tripupdates";
    }

    public static getGtfsRtVehiclePositionsPath(): string {
        return "/gtfs-rt/vehiclepositions";
    }

    public static getTipCancellations(): string {
        return "/trip-cancellations";
    }

    public static getStopPredictions(): string {
        return "/stop-predictions";
    }

    async getAgencies(): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getGtfsAgenciesPath());
    }

    async getCalendar(): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getGtfsCalendarPath());
    }

    async getCalendarDates(): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getGtfsCalendarDatesPath());
    }

    async getFeedInfo(): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getGtfsFeedInfoPath());
    }

    async getRoutes(
        routeId: string | null = null
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getGtfsRoutesPath());
    }

    async getShapes(
        shapeId: string,
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getGtfsShapesPath());
    }

    async getStopTimes(
        tripId: string,
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getGtfsStopTimesPath());
    }

    async getStops(
        routeId: string | null = null,
        tripId: string | null = null,
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getGtfsStopsPath());
    }

    async getTransfers(): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getGtfsTransfersPath());
    }

    async getTrips(
        start: string | null = null,
        extraFields: string | null = null,
        routeId: string | null = null,
        tripId: string | null = null,
        end: string | null = null,
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getGtfsTripsPath());
    }

    async getServiceAlerts(
        useProtoBuf: boolean = false,
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getGtfsRtServiceAlertsPath());
    }

    async getTripUpdates(
        useProtoBuf: boolean = false,
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getGtfsRtTripUpdatesPath());
    }

    async getVehiclePositions(
        useProtoBuf: boolean = false,
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getGtfsRtVehiclePositionsPath());
    }

    async getStopPredictions(
        stopId: string | null = null,
    ): Promise<any> {
        return await this.doGetFetch(MetlinkHttpClient.getStopPredictions());
    }

    async getTripCancellation(
        query: TripCancellationQueryInterface | null = null,
    ): Promise<any> {
        let searchParams: URLSearchParams = QueryBuilder.buildQuery(query);

        return await this.doGetFetch(MetlinkHttpClient.getTipCancellations() + searchParams.toString());
    }
}