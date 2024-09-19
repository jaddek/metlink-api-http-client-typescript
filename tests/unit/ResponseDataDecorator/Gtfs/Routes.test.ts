import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";
import {ClientBuilder} from "../../ClientBuilder";
import {Route} from "../../../../src/domain/gtfs/entity/Route";

const mock: MockAdapter = new MockAdapter(axios);

describe("Response Data Decorator: Routes", () => {

    afterEach(function () {
        mock.reset();
    });

    function getSchema(): {} {
        return {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "route_id": {
                        "type": "string"
                    },
                    "agency_id": {
                        "type": "string"
                    },
                    "route_short_name": {
                        "type": "string"
                    },
                    "route_long_name": {
                        "type": "string"
                    },
                    "route_desc": {
                        "type": "string"
                    },
                    "route_type": {
                        "type": "integer"
                    },
                    "route_color": {
                        "type": "string",
                        "pattern": "^[0-9a-fA-F]{6}$"  // Hex color code without the '#'
                    },
                    "route_text_color": {
                        "type": "string",
                        "pattern": "^[0-9a-fA-F]{6}$"  // Hex color code without the '#'
                    },
                    "route_url": {
                        "type": "string"
                    },
                    "route_sort_order": {
                        "type": "integer"
                    }
                },
                "required": [
                    "id",
                    "route_id",
                    "agency_id",
                    "route_short_name",
                    "route_long_name",
                    "route_desc",
                    "route_type",
                    "route_color",
                    "route_text_color",
                    "route_url",
                    "route_sort_order"
                ],
                "additionalProperties": false
            }
        }
    }

    const dataSet = [
        [
            [
                {
                    "id": 9,
                    "route_id": "10",
                    "agency_id": "TZM",
                    "route_short_name": "1",
                    "route_long_name": "Johnsonville West/Churton Park/Grenada Village - Island Bay",
                    "route_desc": "Island Bay - Johnsonville West/Churton Park/Grenada Village",
                    "route_type": 3,
                    "route_color": "e31837",
                    "route_text_color": "ffffff",
                    "route_url": "",
                    "route_sort_order": 10
                }
            ]

        ]
    ];

    function getPath(): string {
        return "/gtfs/routes";
    }

    it.each(dataSet)("getGtfsRoutes", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData);

        const client: MetlinkHttpClientInterface = ClientBuilder.getHttpClientWithResponseDataDecorator(axios);
        const response:Route[] = await client.getGtfsRoutes(null);

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(Route)
        });
    });

    it.each(dataSet)("getRouteById", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData);

        const client: MetlinkHttpClientInterface = ClientBuilder.getHttpClientWithResponseDataDecorator(axios);
        const response: Route[] = await client.getGtfsRoutes("1100");

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(Route)
        });
    });
});