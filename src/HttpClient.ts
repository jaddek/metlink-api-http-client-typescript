import {
    TripCancellationInterface,
    StopDeparturePredictionsInterface,
    GTFSRealTimeInterface,
    GTFSInterface, TripCancellationQueryInterface, HeadersDictInterface, HostInterface, ResponseDTO
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
import {Response as ResponseBody} from "./domain/gtfs-rt/entity/Response";
import {Transfer} from "./domain/gtfs/entity/Transfer";
import Header from "./domain/gtfs-rt/entity/Header";
import {Entity as ServiceAlertEntity} from "./domain/gtfs-rt/entity/service-alert/Entity";
import {Entity as TripUpdateEntity} from "./domain/gtfs-rt/entity/trip-update/Entity";
import {Entity as VehiclePositionsEntity} from "./domain/gtfs-rt/entity/vehicle-positions/Entity";
import {Response as StopDeparturePredictionResponse} from "./domain/stop-departure-prediction/Response";
import {Trip as CancelledTrip} from "./domain/trip-cancellation/Trip";
import {QueryBuilder} from "./QueryBuilder";

export default class HttpClient
    implements TripCancellationInterface<ResponseDTO>,
        StopDeparturePredictionsInterface<ResponseDTO>,
        GTFSRealTimeInterface<ResponseDTO>,
        GTFSInterface<ResponseDTO> {

    private readonly _headers: HeadersDictInterface;
    private readonly _host: HostInterface;

    constructor(
        host: HostInterface,
        headers: HeadersDictInterface
    ) {
        this._host = host;
        this._headers = {...this.headers, ...headers};
    }

    private getHostFullPath(path: string): string {
        return this._host.getPath() + path.replace("Async", "");
    }

    get headers(): HeadersDictInterface {
        return this._headers;
    }

    async getAgency(): Promise {
        const url: string = this.getHostFullPath("/gtfs/agency");
        const res: Response = await fetch(url);

        const data: Collection<Agency> = await res.json() as Collection<Agency>;

        return new Collection<Agency>();
    }

    async getCalendar(): Promise<Collection<ServiceWeeklySchedule>> {
        const url: string = this.getHostFullPath("/gtfs/calendar");
        const res: Response = await fetch(url);

        const data: Promise<any> = await res.json();
        return new Collection<ServiceWeeklySchedule>();
    }

    async getCalendarDates(): Promise<Collection<CalendarDate>> {
        const url: string = this.getHostFullPath("/gtfs/calendar_dates");
        const res: Response = await fetch(url);

        const data: Promise<any> = await res.json();
        return new Collection<CalendarDate>();
    }

    async getFeedInfo(): Promise<Collection<Feed>> {
        const url: string = this.getHostFullPath("/gtfs/feed_info");
        const res: Response = await fetch(url);

        const data: Promise<any> = await res.json();
        return new Collection<Feed>();
    }

    async getRoutes(
        routeId: string | null = null
    ): Promise<Collection<Route>> {
        const url: string = this.getHostFullPath("/gtfs/routes");
        const res: Response = await fetch(url);

        const data: Promise<any> = await res.json();
        return new Collection<Route>();
    }

    async getShapes(
        shapeId: string,
    ): Promise<Collection<Shape>> {
        const url: string = this.getHostFullPath("/gtfs/shapes");
        const res: Response = await fetch(url);

        const data: Promise<any> = await res.json();
        return new Collection<Shape>()
    }

    async getStopTimes(
        tripId: string,
    ): Promise<Collection<any>> {
        const url: string = this.getHostFullPath("/gtfs/shop_times");
        const res: Response = await fetch(url);

        const data: Promise<any> = await res.json();
        return new Collection<any>();
    }

    async getStops(
        routeId: string | null = null,
        tripId: string | null = null,
    ): Promise<Collection<Stop>> {
        const url: string = this.getHostFullPath("/gtfs/stops");
        const res: Response = await fetch(url);

        const data: Promise<any> = await res.json();
        return new Collection<Stop>();
    }

    async getTransfers(): Promise<Collection<Transfer>> {
        const url: string = this.getHostFullPath("/gtfs/transfers");
        const res: Response = await fetch(url);

        const data: Promise<any> = await res.json();
        return new Collection<Transfer>();
    }

    async getTrips(
        start: string | null = null,
        extraFields: string | null = null,
        routeId: string | null = null,
        tripId: string | null = null,
        end: string | null = null,
    ): Promise<Collection<Trip>> {
        const url: string = this.getHostFullPath("/gtfs/trips");
        const res: Response = await fetch(url);

        const data: Promise<any> = await res.json();
        return new Collection<Trip>();
    }

    async getServiceAlerts(
        useProtoBuf: boolean = false,
    ): Promise<ResponseBody<ServiceAlertEntity>> {
        const url: string = this.getHostFullPath("/gtfs-rt/servicealerts");
        const res: Response = await fetch(url);

        const data: Promise<any> = await res.json();
        return new ResponseBody(new Header("", 1, Date.now()), []);
    }

    async getTripUpdates(
        useProtoBuf: boolean = false,
    ): Promise<ResponseBody<TripUpdateEntity>> {
        const url: string = this.getHostFullPath("/gtfs-rt/tripupdates");
        const res: Response = await fetch(url);

        const data: Promise<any> = await res.json();
        return new ResponseBody(new Header("", 1, Date.now()), []);

    }

    async getVehiclePositions(
        useProtoBuf: boolean = false,
    ): Promise<ResponseBody<VehiclePositionsEntity>> {
        const url: string = this.getHostFullPath("/gtfs-rt/vehiclepositions");
        const res: Response = await fetch(url);

        const data: Promise<any> = await res.json();
        return new ResponseBody(new Header("", 1, Date.now()), []);
    }

    async getStopPredictions(
        stopId: string | null = null,
    ): Promise<StopDeparturePredictionResponse> {
        const url: string = this.getHostFullPath("/stop-predictions");
        const res: Response = await fetch(url);

        const data: Promise<any> = await res.json();
        return new StopDeparturePredictionResponse(1, true, []);
    }

    async getTripCancellation(
        query: TripCancellationQueryInterface | null = null,
    ): Promise<Collection<CancelledTrip>> {
        let searchParams: URLSearchParams = QueryBuilder.buildQuery(query);
        const url: string = this.getHostFullPath("/trip-cancellations");
        const res: Response = await fetch(url);

        const data:Promise<any> = await res.json();
        return new Collection<CancelledTrip>()
    }
}