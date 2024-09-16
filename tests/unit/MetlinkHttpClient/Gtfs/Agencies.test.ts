import MetlinkHttpClient from "../../../../src/MetlinkHttpClient";
import axios from 'axios';
import {AxiosAdapter} from "../../../../src/domain/httpclient/AxiosAdapter";
import MockAdapter from "axios-mock-adapter";
import {SchemaValidator} from "../../../SchemaValidator";

const mock: MockAdapter = new MockAdapter(axios);

describe("Metlink Http Client: Agencies", () => {

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

    it.each(dataSet)("getAgencies", async (agencies) => {
        mock.onGet(MetlinkHttpClient.getAgenciesPath()).replyOnce(200, function () {
            return new Promise(function (resolve) {
                resolve(agencies);
            });
        });

        const client: MetlinkHttpClient = getHttpClient(axios);
        const response = await client.getAgencies();
        const data = await response.data();

        const result = SchemaValidator.validate(data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});