import {
    MetlinkHttpClientInterface,
    TripCancellationQueryInterface,
} from './Contracts'
import { QueryBuilder } from './QueryBuilder'
import { HttpClientInterface } from './domain/httpclient/HttpClientInterface'
import { Routes } from './Routes'

export default class MetlinkHttpClient implements MetlinkHttpClientInterface {
    private readonly httpClientAdapter: HttpClientInterface

    constructor(httpClient: HttpClientInterface) {
        this.httpClientAdapter = httpClient
    }

    private async doGetFetch(
        path: string,
        urlSearchParams: URLSearchParams | null = null
    ): Promise<any> {
        let query: string = ''

        if (urlSearchParams && urlSearchParams.size) {
            query += '?' + urlSearchParams.toString()
        }

        return await this.httpClientAdapter.get(path + query)
    }

    public async getGtfsAgencies(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsAgenciesPath())
    }

    public async getGtfsCalendar(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsCalendarPath())
    }

    public async getGtfsCalendarDates(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsCalendarDatesPath())
    }

    public async getGtfsFeedInfo(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsFeedInfoPath())
    }

    public async getGtfsRoutes(routeId: string | null = null): Promise<any> {
        const query: URLSearchParams = new URLSearchParams()

        if (routeId) {
            query.append('route_id', routeId)
        }

        return await this.doGetFetch(Routes.getGtfsRoutesPath(), query)
    }

    public async getGtfsShapes(shapeId: string): Promise<any> {
        const query: URLSearchParams = new URLSearchParams({
            shape_id: shapeId,
        })

        return await this.doGetFetch(Routes.getGtfsShapesPath(), query)
    }

    public async getGtfsStopTimes(tripId: string): Promise<any> {
        const query: URLSearchParams = new URLSearchParams({
            trip_id: tripId,
        })

        return await this.doGetFetch(Routes.getGtfsStopTimesPath(), query)
    }

    public async getGtfsStops(
        routeId: string | null = null,
        tripId: string | null = null
    ): Promise<any> {
        const query: URLSearchParams = new URLSearchParams()
        if (routeId) {
            query.append('route_id', routeId)
        }

        if (tripId) {
            query.append('tripId', tripId)
        }

        return await this.doGetFetch(Routes.getGtfsStopsPath(), query)
    }

    public async getGtfsTransfers(): Promise<any> {
        return await this.doGetFetch(Routes.getGtfsTransfersPath())
    }

    public async getGtfsTrips(
        start: string | null = null,
        extraFields: string | null = null,
        routeId: string | null = null,
        tripId: string | null = null,
        end: string | null = null
    ): Promise<any> {
        const params: Record<string, string> = {}

        if (start) params['start'] = start
        if (extraFields) params['extraFields'] = extraFields
        if (routeId) params['routeId'] = routeId
        if (tripId) params['tripId'] = tripId
        if (end) params['end'] = end

        const query: URLSearchParams = new URLSearchParams(params)

        return await this.doGetFetch(Routes.getGtfsTripsPath(), query)
    }

    public async getGtfsRtServiceAlerts(
        useProtoBuf: boolean = false
    ): Promise<any> {
        const params: Record<string, string> = {}

        if (useProtoBuf) {
            params['accept'] = 'application/x-protobuf'
        }

        const query: URLSearchParams = new URLSearchParams(params)

        return await this.doGetFetch(Routes.getGtfsRtServiceAlertsPath(), query)
    }

    public async getGtfsRtTripUpdates(
        useProtoBuf: boolean = false
    ): Promise<any> {
        const params: Record<string, string> = {}

        if (useProtoBuf) {
            params['accept'] = 'application/x-protobuf'
        }

        const query: URLSearchParams = new URLSearchParams(params)

        return await this.doGetFetch(Routes.getGtfsRtTripUpdatesPath(), query)
    }

    public async getGtfsRtVehiclePositions(
        useProtoBuf: boolean = false
    ): Promise<any> {
        const params: Record<string, string> = {}

        if (useProtoBuf) {
            params['accept'] = 'application/x-protobuf'
        }

        const query: URLSearchParams = new URLSearchParams(params)

        return await this.doGetFetch(
            Routes.getGtfsRtVehiclePositionsPath(),
            query
        )
    }

    public async getStopPredictions(stopId: string): Promise<any> {
        const query: URLSearchParams = new URLSearchParams({
            stop_id: stopId,
        })

        return await this.doGetFetch(Routes.getStopPredictions(), query)
    }

    public async getTripCancellations(
        searchParams: TripCancellationQueryInterface | null = null
    ): Promise<any> {
        const query: URLSearchParams | null = searchParams
            ? QueryBuilder.buildQuery(searchParams)
            : null

        return await this.doGetFetch(Routes.getTripCancellations(), query)
    }
}
