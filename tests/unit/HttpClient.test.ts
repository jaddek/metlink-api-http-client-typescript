import HttpClient from "../../src/HttpClient";
import {ResponseDTO} from "../../src/Contracts";
import {Collection} from "../../src/Response";
import {Agency} from "../../src/domain/gtfs/entity/Agency";
import {ServiceWeeklySchedule} from "../../src/domain/gtfs/entity/ServiceWeeklySchedule";
import {CalendarDate} from "../../src/domain/gtfs/entity/CalendarDate";
import {Feed} from "../../src/domain/gtfs/entity/Feed";
import {Route} from "../../src/domain/gtfs/entity/Route";
import {Stop} from "../../src/domain/gtfs/entity/Stop";
import {Transfer} from "../../src/domain/gtfs/entity/Transfer";
import {Shape} from "../../src/domain/gtfs/entity/Shape";
import {Trip} from "../../src/domain/gtfs/entity/Trip";
import Response from "../../src/domain/gtfs-rt/entity/Response";
import {Response as StopDeparturePredictionResponse} from "../../src/domain/stop-departure-prediction/Response";
import {Trip as CancelledTrip} from "../../src/domain/trip-cancellation/Trip";
import {Query} from "../../src/domain/trip-cancellation/Query";


describe("Http Client", () => {

    test("getAgency", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getAgency();

        expect(response).toBeInstanceOf(Collection<Agency>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getCalendar", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getCalendar();

        expect(response).toBeInstanceOf(Collection<ServiceWeeklySchedule>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getCalendarDates", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getCalendarDates();

        expect(response).toBeInstanceOf(Collection<CalendarDate>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getFeedInfo", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getFeedInfo();

        expect(response).toBeInstanceOf(Collection<Feed>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getRoutes", () => {
        let routeId: string = "3764";
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getRoutes(routeId);

        expect(response).toBeInstanceOf(Collection<Route>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getStopTimes", () => {
        let tripId: string = "1";
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getStopTimes(tripId);

        expect(response).toBeInstanceOf(Collection<Stop>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getShapes", () => {
        let shapeId: string = "1";
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getShapes(shapeId);

        expect(response).toBeInstanceOf(Collection<Shape>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getStops", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getStops();

        expect(response).toBeInstanceOf(Collection<Stop>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getTransfers", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getTransfers();

        expect(response).toBeInstanceOf(Collection<Transfer>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getTrips", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getTrips();

        expect(response).toBeInstanceOf(Collection<Trip>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getServiceAlerts", () => {
        let useProtobuf: boolean = false;
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getServiceAlerts(useProtobuf);

        expect(response).toBeInstanceOf(Response);
        expect(response.isCollection()).toEqual(false);
    });

    test("getTripUpdates", () => {
        let useProtobuf: boolean = false;
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getTripUpdates(useProtobuf);

        expect(response).toBeInstanceOf(Response);
        expect(response.isCollection()).toEqual(false);
    });

    test("getVehiclePositions", () => {
        let useProtobuf: boolean = false;
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getVehiclePositions(useProtobuf);

        expect(response).toBeInstanceOf(Response);
        expect(response.isCollection()).toEqual(false);
    });

    test("getStopPredictions", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getStopPredictions();

        expect(response).toBeInstanceOf(StopDeparturePredictionResponse)
        expect(response.isCollection()).toEqual(false);
    });

    test("getTripCancellation", () => {
        let client: HttpClient = new HttpClient();
        let query = new Query();
        let response: ResponseDTO = client.getTripCancellation(query);

        expect(response).toBeInstanceOf(Collection<CancelledTrip>)
        expect(response.isCollection()).toEqual(true);
    });
});