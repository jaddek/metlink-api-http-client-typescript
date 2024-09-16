import MetlinkHttpClient from "../../../../src/MetlinkHttpClient";
import axios from 'axios';
import {AxiosAdapter} from "../../../../src/domain/httpclient/AxiosAdapter";
import MockAdapter from "axios-mock-adapter";
import {SchemaValidator} from "../../../SchemaValidator";

const mock: MockAdapter = new MockAdapter(axios);

describe("Metlink Http Client: Calendar Dates", () => {

    afterEach(function () {
        mock.reset();
    });

    function getHttpClient(client: Axios.AxiosInstance): MetlinkHttpClient {
        const adapter: AxiosAdapter = new AxiosAdapter(client);

        return new MetlinkHttpClient(adapter);
    }

    function getSchema(): {} {
        return {
            type: "array",
            items: {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "service_id": {
                        "type": "string"
                    },
                    "date": {
                        "type": "string",
                        "pattern": "^\\d{8}$"  // Format YYYYMMDD
                    },
                    "exception_type": {
                        "type": "integer",
                    }
                },
                "required": ["id", "service_id", "date", "exception_type"],
                "additionalProperties": false
            }
        };
    }

    const dataSet = [
        [
            [
                {
                    "id": 99,
                    "service_id": "612_20240825",
                    "date": "20240919",
                    "exception_type": 1
                }
            ]
        ]
    ];

    function getPath(): string {
        return "/gtfs/calendar_dates";
    }

    it.each(dataSet)("getGtfsCalendarDates", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, function () {
            return new Promise(function (resolve) {
                resolve(mockData);
            });
        });

        const client: MetlinkHttpClient = getHttpClient(axios);
        const response = await client.getCalendarDates();
        const data = await response.data();

        const result = SchemaValidator.validate(data, getSchema());

        expect(result.isValid).toBeTruthy();
    });
});