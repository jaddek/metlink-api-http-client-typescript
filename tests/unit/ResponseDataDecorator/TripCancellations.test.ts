import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import {MetlinkHttpClientInterface} from "../../../src/Contracts";
import {ClientBuilder} from "../ClientBuilder";
import {Trip} from "../../../src/domain/trip-cancellation/Trip";

const mock: MockAdapter = new MockAdapter(axios);

describe("Response Data Decorator: Trip cancellations", () => {

    afterEach(function () {
        mock.reset();
    });

    const dataSet = [
        [
            [
                {
                    "id": "ec196c26-d1ee-410d-bbaf-708763dcd10b",
                    "date_created": "2024-09-17 07:29:07",
                    "date_updated": "2024-09-17 07:53:48",
                    "trip_id": "1__1__134__TZM__224__1__224__1_20240825",
                    "route_id": 10,
                    "trip_date_start": "2024-09-17 08:03:00",
                    "trip_date_end": "2024-09-17 09:25:00",
                    "direction_id": 1,
                    "reinstated": 0,
                    "part_cancellation": 0
                },
            ]
        ]
    ];

    function getPath(): string {
        return "/trip-cancellations";
    }

    it.each(dataSet)("getTripCancellations", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData);

        const client: MetlinkHttpClientInterface = ClientBuilder.getHttpClientWithResponseDataDecorator(axios);
        const response: Trip[] = await client.getTripCancellation();

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(Trip)
        });
    });
});