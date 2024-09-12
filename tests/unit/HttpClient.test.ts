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
import {HttpClientBuilder} from "../../src/HttpClientBuilder";


describe("Http Client", () => {

    function getHttpClient(): HttpClient {
        return HttpClientBuilder.build("test.token");
    }

    test("getAgency", () => {

        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getAgency();

        expect(response).toBeInstanceOf(Collection<Agency>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getCalendar", () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getCalendar();

        expect(response).toBeInstanceOf(Collection<ServiceWeeklySchedule>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getCalendarDates", () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getCalendarDates();

        expect(response).toBeInstanceOf(Collection<CalendarDate>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getFeedInfo", () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getFeedInfo();

        expect(response).toBeInstanceOf(Collection<Feed>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getRoutes", () => {
        const routeId: string = "3764";
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getRoutes(routeId);

        expect(response).toBeInstanceOf(Collection<Route>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getStopTimes", () => {
        const tripId: string = "1";
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getStopTimes(tripId);

        expect(response).toBeInstanceOf(Collection<Stop>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getShapes", () => {
        const shapeId: string = "1";
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getShapes(shapeId);

        expect(response).toBeInstanceOf(Collection<Shape>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getStops", () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getStops();

        expect(response).toBeInstanceOf(Collection<Stop>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getTransfers", () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getTransfers();

        expect(response).toBeInstanceOf(Collection<Transfer>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getTrips", () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getTrips();

        expect(response).toBeInstanceOf(Collection<Trip>);
        expect(response.isCollection()).toEqual(true);
    });

    test("getServiceAlerts", () => {
        const useProtobuf: boolean = false;
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getServiceAlerts(useProtobuf);

        expect(response).toBeInstanceOf(Response);
        expect(response.isCollection()).toEqual(false);
    });

    test("getTripUpdates", () => {
        const useProtobuf: boolean = false;
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getTripUpdates(useProtobuf);

        expect(response).toBeInstanceOf(Response);
        expect(response.isCollection()).toEqual(false);
    });

    test("getVehiclePositions", () => {
        const useProtobuf: boolean = false;
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getVehiclePositions(useProtobuf);

        expect(response).toBeInstanceOf(Response);
        expect(response.isCollection()).toEqual(false);
    });

    test("getStopPredictions", () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = client.getStopPredictions();

        expect(response).toBeInstanceOf(StopDeparturePredictionResponse)
        expect(response.isCollection()).toEqual(false);
    });

    test("getTripCancellation", () => {
        const client: HttpClient = getHttpClient();
        const query = new Query();
        const response: ResponseDTO = client.getTripCancellation(query);

        expect(response).toBeInstanceOf(Collection<CancelledTrip>)
        expect(response.isCollection()).toEqual(true);
    });
});