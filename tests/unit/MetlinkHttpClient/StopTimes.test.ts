import MetlinkHttpClient from "../../../src/MetlinkHttpClient";
import axios from 'axios';
import {AxiosAdapter} from "../../../src/domain/httpclient/AxiosAdapter";
import MockAdapter from "axios-mock-adapter";
import {SchemaValidator} from "../../SchemaValidator";

const mock: MockAdapter = new MockAdapter(axios);

describe("Metlink Http Client: Stop times", () => {

    afterEach(function () {
        mock.reset();
    });

    function getHttpClient(client: Axios.AxiosInstance): MetlinkHttpClient {
        const adapter: AxiosAdapter = new AxiosAdapter(client);

        return new MetlinkHttpClient(adapter);
    }

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

    it.each(dataSet)("getStopTimes", async (mockData) => {
        mock.onGet(MetlinkHttpClient.getStopTimesPath()).replyOnce(200, function () {
            return new Promise(function (resolve) {
                resolve(mockData);
            });
        });

        const client: MetlinkHttpClient = getHttpClient(axios);
        const response = await client.getStopTimes("60__0__439__MNM__2071__1__2071__1_20240825");
        const data = await response.data();

        const result = SchemaValidator.validate(data, getSchema());

        expect(result.isValid).toBeTruthy();
    });
});