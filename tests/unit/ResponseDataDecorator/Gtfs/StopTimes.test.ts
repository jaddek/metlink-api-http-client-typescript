import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";
import {ClientBuilder} from "../../ClientBuilder";
import {StopTime} from "../../../../src/domain/gtfs/entity/StopTime";

const mock: MockAdapter = new MockAdapter(axios);

describe("Response Data Decorator: Stop times", () => {

    afterEach(function () {
        mock.reset();
    });

    const TRIP_ID = "60__0__439__MNM__2071__1__2071__1_20240825";

    const dataSet = [
        [
            [
                {
                    "id": 1,
                    "trip_id": "60__0__439__MNM__2071__1__2071__1_20240825",
                    "arrival_time": "16:58:00",
                    "departure_time": "16:58:00",
                    "stop_id": "3000",
                    "stop_sequence": 0,
                    "shape_dist_traveled": 0,
                    "stop_headsign": "Porirua",
                    "pickup_type": 0,
                    "drop_off_type": 1,
                    "timepoint": "1"
                }
            ]
        ]
    ];

    function getPath(tripId: string): string
    {
        const query: URLSearchParams = new URLSearchParams({
            "trip_id": tripId
        });

        return "/gtfs/stop_times?"+query.toString();
    }

    it.each(dataSet)("getGtfsStopTimes", async (mockData) => {
        mock.onGet(getPath(TRIP_ID)).replyOnce(200, mockData);

        const client: MetlinkHttpClientInterface = ClientBuilder.getHttpClientWithResponseDataDecorator(axios);
        const response: StopTime[] = await client.getGtfsStopTimes(TRIP_ID);

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(StopTime)
        });
    });
});