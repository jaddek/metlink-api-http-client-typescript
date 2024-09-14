import MetlinkHttpClient from "../../../../src/MetlinkHttpClient";
import axios from 'axios';
import {AxiosAdapter} from "../../../../src/domain/httpclient/AxiosAdapter";
import MockAdapter from "axios-mock-adapter";
import {SchemaValidator} from "../../../SchemaValidator";

const mock: MockAdapter = new MockAdapter(axios);

describe("Metlink Http Client: Calendar", () => {

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
                    "service_id": {
                        "type": "string"
                    },
                    "monday": {
                        "type": "integer",
                        "enum": [0, 1]  // Assuming 0 or 1 represent days of service (0 = no service, 1 = service)
                    },
                    "tuesday": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "wednesday": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "thursday": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "friday": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "saturday": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "sunday": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "start_date": {
                        "type": "string",
                        "pattern": "^\\d{8}$"  // Format YYYYMMDD
                    },
                    "end_date": {
                        "type": "string",
                        "pattern": "^\\d{8}$"  // Format YYYYMMDD
                    }
                },
                "required": [
                    "id",
                    "service_id",
                    "monday",
                    "tuesday",
                    "wednesday",
                    "thursday",
                    "friday",
                    "saturday",
                    "sunday",
                    "start_date",
                    "end_date"
                ],
                "additionalProperties": false
            }
        };
    }

    const dataSet = [
        [
            [
                {
                    id: 99,
                    service_id: '210_2_20240825',
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0,
                    start_date: '20240825',
                    end_date: '20240928'
                },
            ]
        ]
    ];

    it.each(dataSet)("getCalendar", async (calendar) => {
        mock.onGet(MetlinkHttpClient.getCalendarPath()).replyOnce(200, function () {
            return new Promise(function (resolve) {
                resolve(calendar);
            });
        });

        const client: MetlinkHttpClient = getHttpClient(axios);
        const response = await client.getCalendar();
        const data = await response.data();

        const result = SchemaValidator.validate(data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});