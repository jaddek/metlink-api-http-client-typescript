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

    function getSchema(): {} {
        return {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "stop_id": {
                        "type": "string"
                    },
                    "stop_code": {
                        "type": "string"
                    },
                    "stop_name": {
                        "type": "string"
                    },
                    "stop_desc": {
                        "type": "string"
                    },
                    "zone_id": {
                        "type": "string"
                    },
                    "stop_lat": {
                        "type": "number"
                    },
                    "stop_lon": {
                        "type": "number"
                    },
                    "location_type": {
                        "type": "integer"
                    },
                    "parent_station": {
                        "type": "string"
                    },
                    "stop_url": {
                        "type": "string"
                    },
                    "stop_timezone": {
                        "type": "string"
                    }
                },
                "required": [
                    "id",
                    "stop_id",
                    "stop_code",
                    "stop_name",
                    "stop_desc",
                    "zone_id",
                    "stop_lat",
                    "stop_lon",
                    "location_type",
                    "parent_station",
                    "stop_url",
                    "stop_timezone"
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