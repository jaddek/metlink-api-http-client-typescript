import MetlinkHttpClient from "../../../../src/MetlinkHttpClient";
import axios from 'axios';
import {AxiosAdapter} from "../../../../src/domain/httpclient/AxiosAdapter";
import MockAdapter from "axios-mock-adapter";
import {SchemaValidator} from "../../../SchemaValidator";

const mock: MockAdapter = new MockAdapter(axios);

describe("Metlink Http Client: Stops", () => {

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

    it.each(dataSet)("getStops", async (mockData) => {
        mock.onGet(MetlinkHttpClient.getStopsPath()).replyOnce(200, function () {
            return new Promise(function (resolve) {
                resolve(mockData);
            });
        });

        const client: MetlinkHttpClient = getHttpClient(axios);
        const response = await client.getStops();
        const data = await response.data();

        const result = SchemaValidator.validate(data, getSchema());

        expect(result.isValid).toBeTruthy();
    });
});