import MetlinkHttpClient from "../../../../src/MetlinkHttpClient";
import axios from 'axios';
import {AxiosAdapter} from "../../../../src/domain/httpclient/AxiosAdapter";
import MockAdapter from "axios-mock-adapter";
import {SchemaValidator} from "../../../SchemaValidator";

const mock: MockAdapter = new MockAdapter(axios);

describe("Metlink Http Client: Feed info", () => {

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
                    "feed_publisher_name": {
                        "type": "string"
                    },
                    "feed_publisher_url": {
                        "type": "string",
                    },
                    "feed_lang": {
                        "type": "string"
                    },
                    "feed_start_date": {
                        "type": "string",
                        "pattern": "^\\d{8}$"  // Format YYYYMMDD
                    },
                    "feed_end_date": {
                        "type": "string",
                        "pattern": "^\\d{8}$"  // Format YYYYMMDD
                    },
                    "feed_version": {
                        "type": "string"
                    }
                },
                "required": [
                    "id",
                    "feed_publisher_name",
                    "feed_publisher_url",
                    "feed_lang",
                    "feed_start_date",
                    "feed_end_date",
                    "feed_version"
                ],
                "additionalProperties": false
            }
        };
    }

    const dataSet = [
        [
            [
                {
                    id: 1,
                    feed_publisher_name: 'publisher name',
                    feed_publisher_url: 'link',
                    feed_lang: 'en',
                    feed_start_date: '20240825',
                    feed_end_date: '20241012',
                    feed_version: 'Version'
                }
            ]

        ]
    ];

    function getPath(): string {
        return "/gtfs/feed_info";
    }

    it.each(dataSet)("getFeedInfo", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, function () {
            return new Promise(function (resolve) {
                resolve(mockData);
            });
        });

        const client: MetlinkHttpClient = getHttpClient(axios);
        const response = await client.getFeedInfo();
        const data = await response.data();

        const result = SchemaValidator.validate(data, getSchema());

        expect(result.isValid).toBeTruthy();
    });
});