import MetlinkHttpClient from "./MetlinkHttpClient";
import {MetlinkHttpClientInterface, TripCancellationQueryInterface} from "./Contracts";
import {Agency} from "./domain/gtfs/entity/Agency";
import {Calendar} from "./domain/gtfs/entity/Calendar";
import {CalendarDate} from "./domain/gtfs/entity/CalendarDate";
import {Feed} from "./domain/gtfs/entity/Feed";
import {Route} from "./domain/gtfs/entity/Route";
import {Shape} from "./domain/gtfs/entity/Shape";
import {Stop} from "./domain/gtfs/entity/Stop";
import {StopTime} from "./domain/gtfs/entity/StopTime";
import {Transfer} from "./domain/gtfs/entity/Transfer";
import {Trip} from "./domain/gtfs/entity/Trip";

export class ResponseDataDecorator implements MetlinkHttpClientInterface {
    private readonly httpClient: MetlinkHttpClient;

    constructor(client: MetlinkHttpClient) {
        this.httpClient = client;
    }

    async getGtfsAgencies(): Promise<Agency[]> {
        const response = await this.httpClient.getGtfsAgencies();

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
        const response = await this.httpClient.getGtfsCalendar();

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
        const response = await this.httpClient.getGtfsCalendarDates();
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
        const response = await this.httpClient.getGtfsFeedInfo();

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

    async getGtfsRoutes(
        routeId: string | null = null
    ): Promise<Route[]> {
        const response = await this.httpClient.getGtfsRoutes(routeId);

        const entities: Route[] = response.data.map((data: any) => {
            return new Route(
                data.id,
                data.route_id,
                data.agency_id,
                data.route_short_name,
                data.route_long_name,
                data.route_desc,
                data.route_type,
                data.route_color,
                data.route_text_color,
                data.route_url,
                data.route_sort_order
            );
        });

        return Promise.resolve(entities);
    }

    async getGtfsShapes(shapeId: string): Promise<Shape[]> {
        const response = await this.httpClient.getGtfsShapes(shapeId);

        const entities: Shape[] = response.data.map((data: any) => {
            return new Shape(
                data.id,
                data.shape_id,
                data.shape_pt_lat,
                data.shape_pt_lon,
                data.shape_pt_sequence,
                data.shape_dist_traveled,
            );
        });

        return Promise.resolve(entities);
    }

    async getGtfsStopTimes(tripId: string): Promise<StopTime[]> {
        const response = await this.httpClient.getGtfsStopTimes(tripId);

        const entities: StopTime[] = response.data.map((data: any) => {
            return new StopTime(
                data.id,
                data.trip_id,
                data.arrival_time,
                data.departure_time,
                data.stop_id,
                data.stop_sequence,
                data.shape_dist_traveled,
                data.stop_headsign,
                data.pickup_type,
                data.drop_off_type,
                data.timepoint,
            );
        });

        return Promise.resolve(entities);
    }

    async getGtfsStops(routeId: string | null = null, tripId: string | null = null): Promise<Stop[]> {
        const response = await this.httpClient.getGtfsStops(routeId, tripId);

        const entities: Stop[] = response.data.map((data: any) => {
            return new Stop(
                data.id,
                data.stop_id,
                data.stop_code,
                data.stop_name,
                data.stop_desc,
                data.zone_id,
                data.stop_lat,
                data.stop_lon,
                data.location_type,
                data.parent_station,
                data.stop_url,
                data.stop_timezone,
            );
        });

        return Promise.resolve(entities);
    }

    async getGtfsTransfers(): Promise<Transfer[]> {
        const response = await this.httpClient.getGtfsTransfers();

        const entities: Transfer[] = response.data.map((data: any) => {
            return new Transfer(
                data.id,
                data.from_stop_id,
                data.to_stop_id,
                data.transfer_type,
                data.min_transfer_time,
                data.from_trip_id,
                data.to_trip_id,
            );
        });

        return Promise.resolve(entities);
    }

    async getGtfsTrips(
        start: string | null = null,
        extraFields: string | null = null,
        routeId: string | null = null,
        tripId: string | null = null,
        end: string | null = null
    ): Promise<Trip[]> {
        const response = await this.httpClient.getGtfsTrips(
            start,
            extraFields,
            routeId,
            tripId,
            end
        );

        const entities: Trip[] = response.data.map((data: any) => {
            return new Trip(
                data.id,
                data.route_id,
                data.service_id,
                data.trip_id,
                data.trip_headsign,
                data.direction_id,
                data.block_id,
                data.shape_id,
                data.wheelchair_accessible,
                data.bikes_allowed,
                data.origin_stop_id,
                data.destination_stop_id,
            );
        });

        return Promise.resolve(entities);
    }

    //
    async getGtfsRtTripUpdates(useProtoBuf: boolean): Promise<any> {
        return Promise.resolve(undefined);
    }

    async getGtfsRtVehiclePositions(useProtoBuf: boolean): Promise<any> {
        return Promise.resolve(undefined);
    }

    async getGtfsServiceAlerts(useProtoBuf: boolean): Promise<any> {
        return Promise.resolve(undefined);
    }


    async getStopPredictions(stopId: string | null): Promise<any> {
        return Promise.resolve(undefined);
    }

    async getTripCancellation(query: TripCancellationQueryInterface | null): Promise<any> {
        return Promise.resolve(undefined);
    }
}