import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";
import {ClientBuilder} from "../../ClientBuilder";
import {Calendar} from "../../../../src/domain/gtfs/entity/Calendar";

const mock: MockAdapter = new MockAdapter(axios);

describe("Response Data Decorator: Calendar", () => {

    afterEach(function () {
        mock.reset();
    });

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

    function getPath(): string {
        return "/gtfs/calendar";
    }

    it.each(dataSet)("getGtfsCalendar", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData);

        const client: MetlinkHttpClientInterface = ClientBuilder.getHttpClientWithResponseDataDecorator(axios);
        const response: Calendar[] = await client.getGtfsCalendar();

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(Calendar)
        })
    });
});