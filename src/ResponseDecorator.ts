import MetlinkHttpClient from "./MetlinkHttpClient";
import {MetlinkHttpClientInterface} from "./Contracts";
import {Agency} from "./domain/gtfs/entity/Agency";
import {Calendar} from "./domain/gtfs/entity/Calendar";
import {CalendarDate} from "./domain/gtfs/entity/CalendarDate";
import {Feed} from "./domain/gtfs/entity/Feed";

export class ResponseDecorator {//implements MetlinkHttpClientInterface {
    private readonly httpClient: MetlinkHttpClient;

    constructor(client: MetlinkHttpClient) {
        this.httpClient = client;
    }

    async getGtfsAgencies(): Promise<Agency[]> {
        const response  = await this.httpClient.getGtfsAgencies();

        const entities: Agency[] = response.data.map((data: any) => {
            return new Agency(
                data.id,
                data.agency_id,
                data.agency_name,
                data.agency_timezone,
                data.agency_url,
                data.agency_lang,
                data.agency_phone,
                data.agency_fare_url
            );
        });

        return Promise.resolve(entities);
    }

    async getGtfsCalendar(): Promise<Calendar[]> {
        const response  = await this.httpClient.getGtfsCalendar();

        const entities: Calendar[] = response.data.map((data: any) => {
            return new Calendar(
                data.id,
                data.service_id,
                data.monday,
                data.tuesday,
                data.wednesday,
                data.thursday,
                data.friday,
                data.saturday,
                data.sunday,
                data.start_date,
                data.end_date,
            );
        });

        return Promise.resolve(entities);
    }
    //
    async getGtfsCalendarDates(): Promise<CalendarDate[]> {
        const response  = await this.httpClient.getGtfsCalendarDates();
        const entities: CalendarDate[] = response.data.map((data: any) => {
            return new CalendarDate(
                data.id,
                data.agency_id,
                data.date,
                data.exception_type,
            );
        });

        return Promise.resolve(entities);
    }

    async getGtfsFeedInfo(): Promise<Feed[]> {
        const response  = await this.httpClient.getGtfsFeedInfo();

        const entities: Feed[] = response.data.map((data: any) => {
            return new Feed(
                data.id,
                data.feed_publisher_name,
                data.feed_publisher_url,
                data.feed_lang,
                data.feed_start_date,
                data.feed_end_date,
                data.feed_version
            );
        });

        return Promise.resolve(entities);
    }
    //
    // async getGtfsRoutes(routeId: string | null): Promise<Response> {
    //     return Promise.resolve(undefined);
    // }
    //
    // async getGtfsRtTripUpdates(useProtoBuf: boolean): Promise<Response> {
    //     return Promise.resolve(undefined);
    // }
    //
    // async getGtfsRtVehiclePositions(useProtoBuf: boolean): Promise<Response> {
    //     return Promise.resolve(undefined);
    // }
    //
    // async getGtfsServiceAlerts(useProtoBuf: boolean): Promise<Response> {
    //     return Promise.resolve(undefined);
    // }
    //
    // async getGtfsShapes(shapeId: string): Promise<Response> {
    //     return Promise.resolve(undefined);
    // }
    //
    // async getGtfsStopTimes(tripId: string): Promise<Response> {
    //     return Promise.resolve(undefined);
    // }
    //
    // async getGtfsStops(routeId: string | null, tripId: string | null): Promise<Response> {
    //     return Promise.resolve(undefined);
    // }
    //
    // async getGtfsTransfers(): Promise<Response> {
    //     return Promise.resolve(undefined);
    // }
    //
    // async getGtfsTrips(start: string | null, extraFields: string | null, routeId: string | null, tripId: string | null, end: string | null): Promise<Response> {
    //     return Promise.resolve(undefined);
    // }
    //
    // async getStopPredictions(stopId: string | null): Promise<Response> {
    //     return Promise.resolve(undefined);
    // }
    //
    // async getTripCancellation(query: TripCancellationQueryInterface | null): Promise<Response> {
    //     return Promise.resolve(undefined);
    // }
}