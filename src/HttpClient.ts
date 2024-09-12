import {
    TripCancellationInterface,
    StopDeparturePredictionsInterface,
    GTFSRealTimeInterface,
    GTFSInterface
} from "./Contracts";
import {Agency} from "./entities/Agency";
import {ServiceWeeklySchedule} from "./entities/ServiceWeeklySchedule";
import {Collection} from "./Response";
import {CalendarDate} from "./entities/CalendarDate";
import {Feed} from "./entities/Feed";
import {Route} from "./entities/Route";
import {Trip} from "./entities/Trip";
import {Shape} from "./entities/Shape";
import {Stop} from "./entities/Stop";


export default class HttpClient
    implements
// TripCancellationInterface,
    // StopDeparturePredictionsInterface,
    // GTFSRealTimeInterface,
    GTFSInterface
{
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



//

//
//     getStopPredictions(): GetStopsResponse {
//         return new GetStopsResponse();
//     }
//

//
//     getTripCancellation(): GetTripCancellationResponse {
//         return new GetTripCancellationResponse();
//     }
//


    // getServiceAlerts(): Collection<any> {
    //     return new Collection<any>();
    // }

//     getTripUpdates(): GetTripsUpdatesResponse {
//         return new GetTripsUpdatesResponse();
//     }
//

//
//     getVehiclePositions(): GetVehiclePositionsResponse {
//         return new GetVehiclePositionsResponse();
//     }
}