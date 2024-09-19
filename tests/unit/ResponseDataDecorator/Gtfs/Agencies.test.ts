import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";
import {ClientBuilder} from "../../ClientBuilder";
import {Agency} from "../../../../src/domain/gtfs/entity/Agency";

const mock: MockAdapter = new MockAdapter(axios);

describe("Response Data Decorator: Agencies", () => {

    afterEach(function () {
        mock.reset();
    });

    function getSchema(): {} {
        return {
            type: "array",
            items: {
                type: "object",
                properties: {
                    id: {type: "integer"},
                    agency_id: {type: "string"},
                    agency_name: {type: "string"},
                    agency_timezone: {type: "string"},
                    agency_url: {type: "string"},
                    agency_lang: {type: "string"},
                    agency_phone: {type: "string"},
                    agency_fare_url: {type: "string"},
                },
                required: [
                    "id",
                    "agency_id",
                    "agency_name",
                    "agency_timezone",
                    "agency_url",
                    "agency_lang",
                    "agency_phone",
                    "agency_fare_url"
                ],
                additionalProperties: false,
            },
        };
    }

    const dataSet = [
        [
            [
                {
                    "id": 1,
                    "agency_id": "MADG",
                    "agency_name": "Madge Coachlines Limited",
                    "agency_timezone": "Pacific/Auckland",
                    "agency_url": "http://www.metlink.org.nz",
                    "agency_lang": "en",
                    "agency_phone": "",
                    "agency_fare_url": "http://www.metlink.org.nz/tickets-and-fares"
                }
            ]
        ]
    ];

    function getPath(): string {
        return "/gtfs/agency";
    }

    it.each(dataSet)("getGtfsAgencies", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData);

        const client: MetlinkHttpClientInterface = ClientBuilder.getHttpClientWithResponseDataDecorator(axios);
        const response: Agency[] = await client.getGtfsAgencies();

        response.forEach((entity, index) => {
            expect(entity).toBeInstanceOf(Agency)
        })
    });
});