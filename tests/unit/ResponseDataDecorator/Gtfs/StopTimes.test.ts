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

    function getSchema(): {} {
        return {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "trip_id": {
                        "type": "string"
                    },
                    "arrival_time": {
                        "type": "string",
                        "pattern": "^\\d{2}:\\d{2}:\\d{2}$"  // Format HH:MM:SS
                    },
                    "departure_time": {
                        "type": "string",
                        "pattern": "^\\d{2}:\\d{2}:\\d{2}$"  // Format HH:MM:SS
                    },
                    "stop_id": {
                        "type": "string"
                    },
                    "stop_sequence": {
                        "type": "integer"
                    },
                    "shape_dist_traveled": {
                        "type": "number"
                    },
                    "stop_headsign": {
                        "type": "string"
                    },
                    "pickup_type": {
                        "type": "integer",
                    },
                    "drop_off_type": {
                        "type": "integer",
                    },
                    "timepoint": {
                        "type": "string",
                    }
                },
                "required": [
                    "id",
                    "trip_id",
                    "arrival_time",
                    "departure_time",
                    "stop_id",
                    "stop_sequence",
                    "shape_dist_traveled",
                    "stop_headsign",
                    "pickup_type",
                    "drop_off_type",
                    "timepoint"
                ],
                "additionalProperties": false
            }
        }
    }

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
        return "/gtfs/shop_times";
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