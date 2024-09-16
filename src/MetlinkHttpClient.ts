import {
    GTFSInterface,
    GTFSRealTimeInterface,
    StopDeparturePredictionsInterface,
    TripCancellationInterface,
    TripCancellationQueryInterface
} from "./Contracts";
import {QueryBuilder} from "./QueryBuilder";
import {HttpClientInterface} from "./domain/httpclient/HttpClientInterface";
import {Routes} from "./Routes";

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

    async getAgencies(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsAgenciesPath());
    }

    async getCalendar(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsCalendarPath());
    }

    async getCalendarDates(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsCalendarDatesPath());
    }

    async getFeedInfo(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsFeedInfoPath());
    }

    async getRoutes(
        routeId: string | null = null
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsRoutesPath());
    }

    async getShapes(
        shapeId: string,
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsShapesPath());
    }

    async getStopTimes(
        tripId: string,
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsStopTimesPath());
    }

    async getStops(
        routeId: string | null = null,
        tripId: string | null = null,
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsStopsPath());
    }

    async getTransfers(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsTransfersPath());
    }

    async getTrips(
        start: string | null = null,
        extraFields: string | null = null,
        routeId: string | null = null,
        tripId: string | null = null,
        end: string | null = null,
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsTripsPath());
    }

    async getServiceAlerts(
        useProtoBuf: boolean = false,
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsRtServiceAlertsPath());
    }

    async getTripUpdates(
        useProtoBuf: boolean = false,
    ): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsRtTripUpdatesPath());
    }

    async getVehiclePositions(
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