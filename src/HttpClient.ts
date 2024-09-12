import {
    TripCancellationInterface,
    StopDeparturePredictionsInterface,
    GTFSRealTimeInterface,
    GTFSInterface
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


export default class HttpClient
    implements TripCancellationInterface,
        StopDeparturePredictionsInterface,
        GTFSRealTimeInterface,
        GTFSInterface {
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

    getRoutes(routeId: number | null = null): Collection<Route> {
        return new Collection<Route>();
    }

    getShapes(): Collection<Shape> {
        return new Collection<Shape>()
    }

    getStopTimes(tripId: number): Collection<any> {
        return new Collection<any>();
    }

    getStops(): Collection<Stop> {
        return new Collection<Stop>();
    }

    getTransfers(): Collection<Transfer> {
        return new Collection<Transfer>();
    }

    getTrips(): Collection<Trip> {
        return new Collection<Trip>();
    }

    getServiceAlerts(): Response<ServiceAlertEntity> {
        return new Response(new Header("", 1, Date.now()), []);
    }

    getTripUpdates(): Response<TripUpdateEntity> {
        return new Response(new Header("", 1, Date.now()), []);

    }

    getVehiclePositions(): Response<VehiclePositionsEntity> {
        return new Response(new Header("", 1, Date.now()), []);
    }

    getStopPredictions(): StopDeparturePredictionResponse {
        return new StopDeparturePredictionResponse(1, true, []);
    }

    getTripCancellation(): Collection<CancelledTrip> {
        return new Collection<CancelledTrip>()
    }
}