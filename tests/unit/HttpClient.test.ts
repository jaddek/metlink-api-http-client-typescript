import HttpClient from "../../src/HttpClient";
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
        const response :Response = await client.getAgency();

        expect(response).toBeInstanceOf(Array);
    });

    test("getCalendar", async () => {
        const client: HttpClient = getHttpClient();
        const response: Response = await client.getCalendar();

        expect(response).toBeInstanceOf(Array);
    });

    test("getCalendarDates", async () => {
        const client: HttpClient = getHttpClient();
        const response: Response = await client.getCalendarDates();

        expect(response).toBeInstanceOf(Array);
    });

    test("getFeedInfo", async () => {
        const client: HttpClient = getHttpClient();
        const response: Response = await client.getFeedInfo();

        expect(response).toBeInstanceOf(Array);
    });

    test("getRoutes", async () => {
        const routeId: string = "3764";
        const client: HttpClient = getHttpClient();
        const response: Response = await client.getRoutes(routeId);

        expect(response).toBeInstanceOf(Array);
    });

    test("getStopTimes", async () => {
        const tripId: string = "1";
        const client: HttpClient = getHttpClient();
        const response: Response = await client.getStopTimes(tripId);

        expect(response).toBeInstanceOf(Array);
    });

    test("getShapes", async () => {
        const shapeId: string = "1";
        const client: HttpClient = getHttpClient();
        const response: Response = await client.getShapes(shapeId);

        expect(response).toBeInstanceOf(Array);
    });

    test("getStops", async () => {
        const client: HttpClient = getHttpClient();
        const response: Response = await client.getStops();

        expect(response).toBeInstanceOf(Array);
    });

    test("getTransfers", async () => {
        const client: HttpClient = getHttpClient();
        const response: Response = await client.getTransfers();

        expect(response).toBeInstanceOf(Array);
    });

    test("getTrips", async () => {
        const client: HttpClient = getHttpClient();
        const response: Response = await client.getTrips();

        expect(response).toBeInstanceOf(Array);
    });

    test("getServiceAlerts", async () => {
        const useProtobuf: boolean = false;
        const client: HttpClient = getHttpClient();
        const response: Response = await client.getServiceAlerts(useProtobuf);

        expect(response).toBeInstanceOf(Array);
    });

    test("getTripUpdates", async () => {
        const useProtobuf: boolean = false;
        const client: HttpClient = getHttpClient();
        const response: Response = await client.getTripUpdates(useProtobuf);

        expect(response).toBeInstanceOf(Array);
    });

    test("getVehiclePositions", async () => {
        const useProtobuf: boolean = false;
        const client: HttpClient = getHttpClient();
        const response: Response = await client.getVehiclePositions(useProtobuf);

        expect(response).toBeInstanceOf(Array);
    });

    test("getStopPredictions", async () => {
        const client: HttpClient = getHttpClient();
        const response: Response = await client.getStopPredictions();

        expect(response).toBeInstanceOf(Array)
    });

    test("getTripCancellation", async () => {
        const client: HttpClient = getHttpClient();
        const query = new Query();
        const response: Response = await client.getTripCancellation(query);

        expect(response).toBeInstanceOf(Array)
    });
});