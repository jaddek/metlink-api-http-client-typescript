import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";
import {ClientBuilder} from "../../ClientBuilder";
import {Stop} from "../../../../src/domain/gtfs/entity/Stop";

const mock: MockAdapter = new MockAdapter(axios);

describe("Response Data Decorator: Stops", () => {

    afterEach(function () {
        mock.reset();
    });

    const dataSet = [
        [
            [
                {
                    "id": 1,
                    "stop_id": "7951",
                    "stop_code": "7951",
                    "stop_name": "Buckley Road (near 108)",
                    "stop_desc": "",
                    "zone_id": "3",
                    "stop_lat": -41.33689713,
                    "stop_lon": 174.7827608,
                    "location_type": 0,
                    "parent_station": "",
                    "stop_url": "",
                    "stop_timezone": "Pacific/Auckland"
                }
            ]
        ]
    ];

    function getPath(): string {
        return "/gtfs/stops";
    }

    it.each(dataSet)("getGtfsStops", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData);

        const client: MetlinkHttpClientInterface = ClientBuilder.getHttpClientWithResponseDataDecorator(axios);
        const response:Stop[] = await client.getGtfsStops(null, null);

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(Stop)
        });
    });
});