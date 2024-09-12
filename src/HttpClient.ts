import {
    TripCancellationInterface,
    StopDeparturePredictionsInterface,
    GTFSRealTimeInterface,
    GTFSInterface, TripCancellationQueryInterface, HeadersDictInterface, HostInterface
} from "./Contracts";
import {Collection} from "./Response";
import {Agency} from "./domain/gtfs/entity/Agency";
import {ServiceWeeklySchedule} from "./domain/gtfs/entity/ServiceWeeklySchedule";
import {CalendarDate} from "./domain/gtfs/entity/CalendarDate";
import {Feed} from "./domain/gtfs/entity/Feed";
import {Route} from "./domain/gtfs/entity/Route";
import {Shape} from "./domain/gtfs/entity/Shape";
import {Stop} from "./domain/gtfs/entity/Stop";
import {Trip} from "./domain/gtfs/entity/Trip";
import Response from "./domain/gtfs-rt/entity/Response";
import {Transfer} from "./domain/gtfs/entity/Transfer";
import Header from "./domain/gtfs-rt/entity/Header";
import {Entity as ServiceAlertEntity} from "./domain/gtfs-rt/entity/service-alert/Entity";
import {Entity as TripUpdateEntity} from "./domain/gtfs-rt/entity/trip-update/Entity";
import {Entity as VehiclePositionsEntity} from "./domain/gtfs-rt/entity/vehicle-positions/Entity";
import {Response as StopDeparturePredictionResponse} from "./domain/stop-departure-prediction/Response";
import {Trip as CancelledTrip} from "./domain/trip-cancellation/Trip";
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

    get headers(): HeadersDictInterface {
        return this._headers;
    }

    getAgency(): Collection<Agency> {
        return new Collection<Agency>();
    }

    getCalendar(): Collection<ServiceWeeklySchedule> {
        return new Collection<ServiceWeeklySchedule>();
    }

    getCalendarDates(): Collection<CalendarDate> {
        return new Collection<CalendarDate>();
    }

    getFeedInfo(): Collection<Feed> {
        return new Collection<Feed>();
    }

    getRoutes(
        routeId: string | null = null
    ): Collection<Route> {
        return new Collection<Route>();
    }

    getShapes(
        shapeId: string,
    ): Collection<Shape> {
        return new Collection<Shape>()
    }

    getStopTimes(
        tripId: string,
    ): Collection<any> {
        return new Collection<any>();
    }

    getStops(
        routeId: string | null = null,
        tripId: string | null = null,
    ): Collection<Stop> {
        return new Collection<Stop>();
    }

    getTransfers(): Collection<Transfer> {
        return new Collection<Transfer>();
    }

    getTrips(
        start: string | null = null,
        extraFields: string | null = null,
        routeId: string | null = null,
        tripId: string | null = null,
        end: string | null = null,
    ): Collection<Trip> {
        return new Collection<Trip>();
    }

    getServiceAlerts(
        useProtoBuf: boolean = false,
    ): Response<ServiceAlertEntity> {
        return new Response(new Header("", 1, Date.now()), []);
    }

    getTripUpdates(
        useProtoBuf: boolean,
    ): Response<TripUpdateEntity> {
        return new Response(new Header("", 1, Date.now()), []);

    }

    getVehiclePositions(
        useProtoBuf: boolean,
    ): Response<VehiclePositionsEntity> {
        return new Response(new Header("", 1, Date.now()), []);
    }

    getStopPredictions(
        stopId: string | null = null,
    ): StopDeparturePredictionResponse {
        return new StopDeparturePredictionResponse(1, true, []);
    }

    getTripCancellation(
        query: TripCancellationQueryInterface | null = null,
    ): Collection<CancelledTrip> {
        let searchParams: URLSearchParams = QueryBuilder.buildQuery(query);

        return new Collection<CancelledTrip>()
    }
}