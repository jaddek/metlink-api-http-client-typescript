import MetlinkHttpClient from "../../../src/MetlinkHttpClient";
import axios from 'axios';
import {AxiosAdapter} from "../../../src/domain/httpclient/AxiosAdapter";
import MockAdapter from "axios-mock-adapter";
import {SchemaValidator} from "../../SchemaValidator";

const mock: MockAdapter = new MockAdapter(axios);

describe("Metlink Http Client: Trip cancellations", () => {

    afterEach(function () {
        mock.reset();
    });

    function getHttpClient(client: Axios.AxiosInstance): MetlinkHttpClient {
        const adapter: AxiosAdapter = new AxiosAdapter(client);

        return new MetlinkHttpClient(adapter);
    }

    function getSchema(): object {
        return {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "date_created": {
                        "type": "string",
                    },
                    "date_updated": {
                        "type": "string",
                    },
                    "trip_id": {
                        "type": "string"
                    },
                    "route_id": {
                        "type": "integer"
                    },
                    "trip_date_start": {
                        "type": "string",
                    },
                    "trip_date_end": {
                        "type": "string"
                    },
                    "direction_id": {
                        "type": "integer"
                    },
                    "reinstated": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "part_cancellation": {
                        "type": "integer",
                        "enum": [0, 1]
                    }
                },
                "required": [
                    "id",
                    "date_created",
                    "date_updated",
                    "trip_id",
                    "route_id",
                    "trip_date_start",
                    "trip_date_end",
                    "direction_id",
                    "reinstated",
                    "part_cancellation"
                ]
            }
        }
    }

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

        const client: MetlinkHttpClient = getHttpClient(axios);
        const response = await client.getTripCancellations();

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});