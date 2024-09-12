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
import {Response as ResponseBody} from "../../src/domain/gtfs-rt/entity/Response";
import {Response as StopDeparturePredictionResponse} from "../../src/domain/stop-departure-prediction/Response";
import {Trip as CancelledTrip} from "../../src/domain/trip-cancellation/Trip";
import {Query} from "../../src/domain/trip-cancellation/Query";
import {HttpClientBuilder} from "../../src/HttpClientBuilder";
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe("Http Client", () => {
    function getHttpClient(): HttpClient {
        return HttpClientBuilder.build("test.token");
    }

    test("getAgency", async () => {
        const mockResponse = [{
            "id": 1,
            "agency_id": "MADG",
            "agency_name": "Madge Coachlines Limited",
            "agency_timezone": "Pacific/Auckland",
            "agency_url": "http://www.metlink.org.nz",
            "agency_lang": "en",
            "agency_phone": "",
            "agency_fare_url": "http://www.metlink.org.nz/tickets-and-fares"
        }];

        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: () => Promise.resolve(mockResponse),
        } as Response);

        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getAgency();

        expect(response).toBeInstanceOf(Collection<Agency>);
    });

    test("getCalendar", async () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getCalendar();

        expect(response).toBeInstanceOf(Collection<ServiceWeeklySchedule>);
    });

    test("getCalendarDates", async () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getCalendarDates();

        expect(response).toBeInstanceOf(Collection<CalendarDate>);
    });

    test("getFeedInfo", async () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getFeedInfo();

        expect(response).toBeInstanceOf(Collection<Feed>);
    });

    test("getRoutes", async () => {
        const routeId: string = "3764";
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getRoutes(routeId);

        expect(response).toBeInstanceOf(Collection<Route>);
    });

    test("getStopTimes", async () => {
        const tripId: string = "1";
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getStopTimes(tripId);

        expect(response).toBeInstanceOf(Collection<Stop>);
    });

    test("getShapes", async () => {
        const shapeId: string = "1";
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getShapes(shapeId);

        expect(response).toBeInstanceOf(Collection<Shape>);
    });

    test("getStops", async () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getStops();

        expect(response).toBeInstanceOf(Collection<Stop>);
    });

    test("getTransfers", async () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getTransfers();

        expect(response).toBeInstanceOf(Collection<Transfer>);
    });

    test("getTrips", async () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getTrips();

        expect(response).toBeInstanceOf(Collection<Trip>);
    });

    test("getServiceAlerts", async () => {
        const useProtobuf: boolean = false;
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getServiceAlerts(useProtobuf);

        expect(response).toBeInstanceOf(ResponseBody);
    });

    test("getTripUpdates", async () => {
        const useProtobuf: boolean = false;
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getTripUpdates(useProtobuf);

        expect(response).toBeInstanceOf(ResponseBody);
    });

    test("getVehiclePositions", async () => {
        const useProtobuf: boolean = false;
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getVehiclePositions(useProtobuf);

        expect(response).toBeInstanceOf(ResponseBody);
    });

    test("getStopPredictions", async () => {
        const client: HttpClient = getHttpClient();
        const response: ResponseDTO = await client.getStopPredictions();

        expect(response).toBeInstanceOf(StopDeparturePredictionResponse)
    });

    test("getTripCancellation", async () => {
        const client: HttpClient = getHttpClient();
        const query = new Query();
        const response: ResponseDTO = await client.getTripCancellation(query);

        expect(response).toBeInstanceOf(Collection<CancelledTrip>)
        expect(response.isCollection()).toEqual(true);
    });
});