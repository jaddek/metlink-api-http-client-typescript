import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";
import {ClientBuilder} from "../../ClientBuilder";
import {Response as GtfsRtResponse} from "../../../../src/domain/gtfs-rt/entity/Response";
import {Entity} from "../../../../src/domain/gtfs-rt/entity/trip-update/Entity";

const mock: MockAdapter = new MockAdapter(axios);

describe("Response Data Decorator: GTFS-RT: Trip updates", () => {

    afterEach(function () {
        mock.reset();
    });

    const dataSet = [
        [
                {
                    "header": {
                        "gtfsRealtimeVersion": "2.0",
                        "incrementality": 0,
                        "timestamp": 1726514766
                    },
                    "entity": [
                        {
                            "trip_update": {
                                "stop_time_update": {
                                    "schedule_relationship": 0,
                                    "stop_sequence": 36,
                                    "arrival": {
                                        "delay": 237,
                                        "time": 1726514769
                                    },
                                    "stop_id": "9242"
                                },
                                "trip": {
                                    "start_time": "06:55:00",
                                    "trip_id": "110__0__103__TZM__501__4__501__4_20240825",
                                    "direction_id": 0,
                                    "route_id": 1100,
                                    "schedule_relationship": 0,
                                    "start_date": "20240917"
                                },
                                "vehicle": {
                                    "id": "3315"
                                },
                                "timestamp": 1726514757
                            },
                            "id": "fb9742b0-b5c3-46ca-99cf-c4f24668607d"
                        }
                    ]
                }
        ]
    ];

    function getPath(): string {
        return "/gtfs-rt/tripupdates";
    }

    it.each(dataSet)("GetGtfsRtTripUpdates", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData);

        const client: MetlinkHttpClientInterface = ClientBuilder.getHttpClientWithResponseDataDecorator(axios);
        const response: GtfsRtResponse<Entity> = await client.getGtfsRtTripUpdates();

        expect(response).toBeInstanceOf(GtfsRtResponse<Entity>)

    });
});