import MetlinkHttpClient from "../../../../src/MetlinkHttpClient";
import axios from 'axios';
import {AxiosAdapter} from "../../../../src/domain/httpclient/AxiosAdapter";
import MockAdapter from "axios-mock-adapter";
import {SchemaValidator} from "../../../SchemaValidator";

const mock: MockAdapter = new MockAdapter(axios);

describe("Metlink Http Client: Trips", () => {

    afterEach(function () {
        mock.reset();
    });

    function getHttpClient(client: Axios.AxiosInstance): MetlinkHttpClient {
        const adapter: AxiosAdapter = new AxiosAdapter(client);

        return new MetlinkHttpClient(adapter);
    }

    function getSchema(): object {
        return {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "route_id": {
                        "type": "integer"
                    },
                    "service_id": {
                        "type": "string"
                    },
                    "trip_id": {
                        "type": "string"
                    },
                    "trip_headsign": {
                        "type": "string"
                    },
                    "direction_id": {
                        "type": "integer"
                    },
                    "block_id": {
                        "type": "string"
                    },
                    "shape_id": {
                        "type": "string"
                    },
                    "wheelchair_accessible": {
                        "type": "integer"
                    },
                    "bikes_allowed": {
                        "type": "integer"
                    },
                    "origin_stop_id": {
                        "type": "string"
                    },
                    "destination_stop_id": {
                        "type": "string"
                    }
                },
                "required": [
                    "id",
                    "route_id",
                    "service_id",
                    "trip_id",
                    "trip_headsign",
                    "direction_id",
                    "block_id",
                    "shape_id",
                    "wheelchair_accessible",
                    "bikes_allowed",
                    "origin_stop_id",
                    "destination_stop_id"
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

        const client: MetlinkHttpClient = getHttpClient(axios);
        const response = await client.getGtfsTrips();

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});