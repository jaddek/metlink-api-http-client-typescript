import HttpClient from "../../src/HttpClient";
import {ResponseDTO} from "../../src/Contracts";
import {Collection} from "../../src/Response";
import {CalendarDate} from "../../src/entities/CalendarDate";
import {ServiceWeeklySchedule} from "../../src/entities/ServiceWeeklySchedule";
import {Agency} from "../../src/entities/Agency";
import {Feed} from "../../src/entities/Feed";
import {Route} from "../../src/entities/Route";
import {Shape} from "../../src/entities/Shape";
import {Trip} from "../../src/entities/Trip";
import {Stop} from "../../src/entities/Stop";

describe("Http Client", () => {

    test("getAgency", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getAgency();

        expect(response).toBeInstanceOf(Collection<Agency>)
        expect(response.isCollection()).toEqual(true);
    });

    test("getCalendar", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getCalendar();

        expect(response).toBeInstanceOf(Collection<ServiceWeeklySchedule>)
        expect(response.isCollection()).toEqual(true);
    });

    test("getCalendarDates", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getCalendarDates();

        expect(response).toBeInstanceOf(Collection<CalendarDate>)
        expect(response.isCollection()).toEqual(true);
    });

    test("getFeedInfo", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getFeedInfo();

        expect(response).toBeInstanceOf(Collection<Feed>)
        expect(response.isCollection()).toEqual(true);

    });

    test("getRoutes", () => {
        let routeId: number = 3764;
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getRoutes(routeId);

        expect(response).toBeInstanceOf(Collection<Route>)
        expect(response.isCollection()).toEqual(true);
    });

    test("getStopTimes", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getStopTimes(1);

        expect(response).toBeInstanceOf(Collection<Stop>)
        expect(response.isCollection()).toEqual(true);
    });

    test("getShapes", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getShapes();

        expect(response).toBeInstanceOf(Collection<Shape>)
        expect(response.isCollection()).toEqual(true);
    });

    test("getStops", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getStops();

        expect(response).toBeInstanceOf(Collection<Stop>)
    });

    test("getTransfers", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getTransfers();

        expect(response).toBeInstanceOf(Collection<Transfer>)
    });

    test("getTrips", () => {
        let client: HttpClient = new HttpClient();
        let response: ResponseDTO = client.getTrips();

        expect(response).toBeInstanceOf(Collection<Trip>)
    });


    //
    // test("getServiceAlerts", () => {
    //     let client: HttpClient = new HttpClient();
    //     let response: ResponseDTO = client.getServiceAlerts();
    //
    //     expect(response).toBeInstanceOf(GetServiceAlertsResponse)
    // });
    //

    //
    // test("getStopPredictions", () => {
    //     let client: HttpClient = new HttpClient();
    //     let response: ResponseDTO = client.getStopPredictions();
    //
    //     expect(response).toBeInstanceOf(GetStopPredictionsResponse)
    // });
    //
    // test("getStopTimes", () => {
    //     let client: HttpClient = new HttpClient();
    //     let response: ResponseDTO = client.getStopTimes();
    //
    //     expect(response).toBeInstanceOf(GetStopTimesResponse)
    // });
    //

    //
    // test("getTripCancellation", () => {
    //     let client: HttpClient = new HttpClient();
    //     let response: ResponseDTO = client.getTripCancellation();
    //
    //     expect(response).toBeInstanceOf(GetTripCancellationResponse)
    // });
    //
    // test("getTripUpdates", () => {
    //     let client: HttpClient = new HttpClient();
    //     let response: ResponseDTO = client.getTripUpdates();
    //
    //     expect(response).toBeInstanceOf(GetTripsUpdatesResponse)
    // });
    //

    //
    // test("getVehiclePositions", () => {
    //     let client: HttpClient = new HttpClient();
    //     let response: ResponseDTO = client.getVehiclePositions();
    //
    //     expect(response).toBeInstanceOf(GetVehiclePositionsResponse)
    // });
});