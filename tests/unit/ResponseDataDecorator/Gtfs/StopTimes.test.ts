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

    function getPath(): string
    {
        return "/gtfs/stop_times";
    }

    it.each(dataSet)("getGtfsStopTimes", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData);

        const client: MetlinkHttpClientInterface = ClientBuilder.getHttpClientWithResponseDataDecorator(axios);
        const response: StopTime[] = await client.getGtfsStopTimes("60__0__439__MNM__2071__1__2071__1_20240825");

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(StopTime)
        });
    });
});