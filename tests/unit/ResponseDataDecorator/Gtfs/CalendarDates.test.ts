import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";
import {ClientBuilder} from "../../ClientBuilder";
import {CalendarDate} from "../../../../src/domain/gtfs/entity/CalendarDate";

const mock: MockAdapter = new MockAdapter(axios);

describe("Response Data Decorator: Calendar Dates", () => {

    afterEach(function () {
        mock.reset();
    });

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
        mock.onGet(getPath()).replyOnce(200, mockData);

        const client: MetlinkHttpClientInterface = ClientBuilder.getHttpClientWithResponseDataDecorator(axios);
        const response: CalendarDate[] = await client.getGtfsCalendarDates();

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(CalendarDate)
        });
    });
});