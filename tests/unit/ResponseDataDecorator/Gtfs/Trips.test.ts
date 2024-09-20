import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";
import {ClientBuilder} from "../../ClientBuilder";
import {Trip} from "../../../../src/domain/gtfs/entity/Trip";

const mock: MockAdapter = new MockAdapter(axios);

describe("Response Data Decorator: Trips", () => {

    afterEach(function () {
        mock.reset();
    });

    const dataSet = [
        [
            [
                {
                    "id": 1,
                    "route_id": 600,
                    "service_id": "2071_1_20240825",
                    "trip_id": "60__0__439__MNM__2071__1__2071__1_20240825",
                    "trip_headsign": "",
                    "direction_id": 0,
                    "block_id": "",
                    "shape_id": "[@356.0.29339884@]2_20240825",
                    "wheelchair_accessible": 0,
                    "bikes_allowed": 2,
                    "origin_stop_id": "3000",
                    "destination_stop_id": "2002"
                }
            ]
        ]
    ];

    function getPath(): string {
        return "/gtfs/trips";
    }

    it.each(dataSet)("getGtfsTrips", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData);

        const client: MetlinkHttpClientInterface = ClientBuilder.getHttpClientWithResponseDataDecorator(axios);
        const response: Trip[] = await client.getGtfsTrips(
            null,
            null,
            null,
            null,
            null,
        );

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(Trip)
        });
    });
});