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
import {Trip as GtfsTrip} from "./domain/gtfs/entity/Trip";
import {Response as GtfsRtResponse} from "./domain/gtfs-rt/entity/Response";
import {Trip as ServiceAlertTrip} from "./domain/gtfs-rt/entity/service-alert/Trip";
import {Trip as CancellationTrip} from "./domain/trip-cancellation/Trip";
import Alert from "./domain/gtfs-rt/entity/service-alert/Alert";
import {Entity} from "./domain/gtfs-rt/entity/service-alert/Entity";
import Header from "./domain/gtfs-rt/entity/Header";
import {ActivePeriod} from "./domain/gtfs-rt/entity/service-alert/ActivePeriod";
import {InformedEntity} from "./domain/gtfs-rt/entity/service-alert/InformedEntity";
import {Entity as TripUpdateEntity} from "./domain/gtfs-rt/entity/trip-update/Entity";
import {TripUpdate} from "./domain/gtfs-rt/entity/trip-update/TripUpdate";
import {StopTimeUpdate} from "./domain/gtfs-rt/entity/trip-update/StopTimeUpdate";
import {Arrival} from "./domain/gtfs-rt/entity/trip-update/Arrival";
import {Trip as TripUpdateTrip} from "./domain/gtfs-rt/entity/trip-update/Trip";
import {VehicleId} from "./domain/gtfs-rt/entity/trip-update/VehicleId";

export class ResponseDataDecorator implements MetlinkHttpClientInterface {
    private readonly httpClient: MetlinkHttpClientInterface;

    constructor(client: MetlinkHttpClientInterface) {
        this.httpClient = client;
    }

    public async getGtfsAgencies(): Promise<Agency[]> {
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

    public async getGtfsCalendar(): Promise<Calendar[]> {
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

    public async getGtfsCalendarDates(): Promise<CalendarDate[]> {
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

    public async getGtfsFeedInfo(): Promise<Feed[]> {
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

    public async getGtfsRoutes(
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

    public async getGtfsShapes(shapeId: string): Promise<Shape[]> {
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

    public async getGtfsStopTimes(tripId: string): Promise<StopTime[]> {
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

    public async getGtfsStops(routeId: string | null = null, tripId: string | null = null): Promise<Stop[]> {
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

    public async getGtfsTransfers(): Promise<Transfer[]> {
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

    public async getGtfsTrips(
        start: string | null = null,
        extraFields: string | null = null,
        routeId: string | null = null,
        tripId: string | null = null,
        end: string | null = null
    ): Promise<GtfsTrip[]> {
        const response = await this.httpClient.getGtfsTrips(
            start,
            extraFields,
            routeId,
            tripId,
            end
        );

        const entities: GtfsTrip[] = response.data.map((data: any) => {
            return new GtfsTrip(
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
    public async getGtfsRtTripUpdates(useProtoBuf: boolean): Promise<any> {
        const response = await this.httpClient.getGtfsRtTripUpdates(useProtoBuf);

        const header: Header = new Header(
            response.data.header.gtfsRealtimeVersion,
            response.data.header.incrementality,
            response.data.header.timestamp,
        );

        const entity: TripUpdateEntity[] = response.data.entity.map((data: any) => {
            return new TripUpdateEntity(
                data.id,
                new TripUpdate(
                    new StopTimeUpdate(
                        data.trip_update.stop_time_update.schedule_relationship,
                        data.trip_update.stop_time_update.stop_sequence,
                        new Arrival(
                            data.trip_update.stop_time_update.arrival.delay,
                            data.trip_update.stop_time_update.arrival.time,
                        ),
                        data.trip_update.stop_time_update.stop_id
                    ),
                    new TripUpdateTrip(
                        data.trip_update.trip.start_time,
                        data.trip_update.trip.trip_id,
                        data.trip_update.trip.direction_id,
                        parseInt(data.trip_update.trip.route_id),
                        data.trip_update.trip.schedule_relationship,
                        data.trip_update.trip.start_date
                    ),
                    new VehicleId(
                        data.trip_update.vehicle.id
                    ),
                    data.trip_update.id
                ),
            )
        });

        const body = new GtfsRtResponse(
            header,
            entity
        )

        return Promise.resolve(body);
    }

    public async getGtfsRtVehiclePositions(useProtoBuf: boolean): Promise<any> {
        return Promise.resolve(undefined);
    }

    public async getGtfsRtServiceAlerts(useProtoBuf: boolean): Promise<GtfsRtResponse<Entity>> {
        const response = await this.httpClient.getGtfsRtServiceAlerts();

        const header: Header = new Header(
            response.data.header.gtfsRealtimeVersion,
            response.data.header.incrementality,
            response.data.header.timestamp,
        );

        const entity: Entity[] = response.data.entity.map((data: any) => {
            return new Alert(
                data.alert.active_period.map((data: any) => {
                    return new ActivePeriod(
                        data.start,
                        data.end
                    )
                }),
                data.alert.effect,
                data.alert.cause,
                data.alert.description_text,
                data.alert.header_text,
                data.alert.informed_entity.map((data: any) => {
                    return new InformedEntity(
                        data.stop_id,
                        data.route_id,
                        data.route_type ?? null,
                        data.trip ? new ServiceAlertTrip(
                            data.trip.start_time,
                            data.trip.description,
                            data.trip.trip_id,
                            data.trip.direction_id,
                            data.trip.route_id,
                            data.trip.start_date,
                        ) : null
                    );
                }),
                data.alert.severity_level,
            )
        });

        const body = new GtfsRtResponse(
            header,
            entity
        )

        return Promise.resolve(body);
    }


    public async getStopPredictions(stopId: string | null): Promise<any> {

    }

    public async getTripCancellations(query: TripCancellationQueryInterface | null): Promise<any> {
        const response = await this.httpClient.getTripCancellations(query);

        const entities: CancellationTrip[] = response.data.map((data: any) => {
            return new CancellationTrip(
                data.id,
                data.date_created,
                data.date_updated,
                data.trip_id,
                data.route_id,
                data.trip_date_start,
                data.trip_date_end,
                data.direction_id,
                data.reinstalled,
                data.part_cancellation
            );
        });

        return Promise.resolve(entities);
    }
}