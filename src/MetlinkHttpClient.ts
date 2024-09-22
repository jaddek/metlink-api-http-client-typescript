import {MetlinkHttpClientInterface, TripCancellationQueryInterface} from "./Contracts";
import {QueryBuilder} from "./QueryBuilder";
import {HttpClientInterface} from "./domain/httpclient/HttpClientInterface";
import {Routes} from "./Routes";

export default class MetlinkHttpClient
    implements MetlinkHttpClientInterface {

    private readonly httpClientAdapter: HttpClientInterface;

    constructor(
        httpClient: HttpClientInterface,
    ) {
        this.httpClientAdapter = httpClient;
    }

    private async doGetFetch(path: string): Promise<any> {
        return await this.httpClientAdapter.get(path);
    }

    async getGtfsAgencies(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsAgenciesPath());
    }

    async getGtfsCalendar(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsCalendarPath());
    }

    async getGtfsCalendarDates(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsCalendarDatesPath());
    }

    async getGtfsFeedInfo(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsFeedInfoPath());
    }

    async getGtfsRoutes(
        routeId: string | null = null
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsRoutesPath());
    }

    async getGtfsShapes(
        shapeId: string,
    ): Promise<any> {
        const query = new URLSearchParams();

        if (shapeId) {
            query.append("shape_id", shapeId);
        }

        return await this.doGetFetch(Routes.getGtfsShapesPath() + "?" + query.toString());
    }

    async getGtfsStopTimes(
        tripId: string,
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsStopTimesPath());
    }

    async getGtfsStops(
        routeId: string | null = null,
        tripId: string | null = null,
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsStopsPath());
    }

    async getGtfsTransfers(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsTransfersPath());
    }

    async getGtfsTrips(
        start: string | null = null,
        extraFields: string | null = null,
        routeId: string | null = null,
        tripId: string | null = null,
        end: string | null = null,
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsTripsPath());
    }

    async getGtfsServiceAlerts(
        useProtoBuf: boolean = false,
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsRtServiceAlertsPath());
    }

    async getGtfsRtTripUpdates(
        useProtoBuf: boolean = false,
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsRtTripUpdatesPath());
    }

    async getGtfsRtVehiclePositions(
        useProtoBuf: boolean = false,
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsRtVehiclePositionsPath());
    }

    async getStopPredictions(
        stopId: string | null = null,
    ): Promise<any> {
        return await this.doGetFetch(Routes.getStopPredictions());
    }

    async getTripCancellation(
        query: TripCancellationQueryInterface | null = null,
    ): Promise<any> {
        let searchParams: URLSearchParams = QueryBuilder.buildQuery(query);

        return await this.doGetFetch(Routes.getTripCancellations() + searchParams.toString());
    }
}