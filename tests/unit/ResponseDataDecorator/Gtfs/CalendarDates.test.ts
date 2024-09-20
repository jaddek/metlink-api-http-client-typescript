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