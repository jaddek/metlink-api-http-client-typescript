import MetlinkHttpClient from "../../../../src/MetlinkHttpClient";
import axios from 'axios';
import {AxiosAdapter} from "../../../../src/domain/httpclient/AxiosAdapter";
import MockAdapter from "axios-mock-adapter";
import {SchemaValidator} from "../../../SchemaValidator";

const mock: MockAdapter = new MockAdapter(axios);

describe("Metlink Http Client: GTFS-RT: Service alerts", () => {

    afterEach(function () {
        mock.reset();
    });

    function getHttpClient(client: Axios.AxiosInstance): MetlinkHttpClient {
        const adapter: AxiosAdapter = new AxiosAdapter(client);

        return new MetlinkHttpClient(adapter);
    }

    function getSchema(): {} {
        return {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "type": "object",
            "properties": {
                "header": {
                    "type": "object",
                    "properties": {
                        "gtfsRealtimeVersion": {
                            "type": "string"
                        },
                        "incrementality": {
                            "type": "integer"
                        },
                        "timestamp": {
                            "type": "integer"
                        }
                    },
                    "required": ["gtfsRealtimeVersion", "incrementality", "timestamp"]
                },
                "entity": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string"
                            },
                            "vehicle": {
                                "type": "object",
                                "properties": {
                                    "trip": {
                                        "type": "object",
                                        "properties": {
                                            "start_time": {
                                                "type": "string"
                                            },
                                            "trip_id": {
                                                "type": "string"
                                            },
                                            "direction_id": {
                                                "type": "integer"
                                            },
                                            "route_id": {
                                                "type": "integer"
                                            },
                                            "schedule_relationship": {
                                                "type": "integer"
                                            },
                                            "start_date": {
                                                "type": "string"
                                            }
                                        },
                                        "required": ["start_time", "trip_id", "direction_id", "route_id", "schedule_relationship", "start_date"]
                                    },
                                    "position": {
                                        "type": "object",
                                        "properties": {
                                            "bearing": {
                                                "type": "integer"
                                            },
                                            "latitude": {
                                                "type": "number"
                                            },
                                            "longitude": {
                                                "type": "number"
                                            }
                                        },
                                        "required": ["bearing", "latitude", "longitude"]
                                    },
                                    "occupancy_status": {
                                        "type": "integer"
                                    },
                                    "vehicle": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "type": "string"
                                            }
                                        },
                                        "required": ["id"]
                                    },
                                    "timestamp": {
                                        "type": "integer"
                                    }
                                },
                                "required": ["trip", "position", "occupancy_status", "vehicle", "timestamp"]
                            }
                        },
                        "required": ["id", "vehicle"]
                    }
                }
            },
            "required": ["header", "entity"]
        }
    }

    const dataSet = [
        [
            {
                "header": {
                    "gtfsRealtimeVersion": "2.0",
                    "incrementality": 0,
                    "timestamp": 1726515043
                },
                "entity": [
                    {
                        "id": "258a7bb5-3ae7-4436-a7d5-340893394391",
                        "vehicle": {
                            "trip": {
                                "start_time": "07:15:00",
                                "trip_id": "4__1__112__NBM__7__5__7__5_20240825",
                                "direction_id": 1,
                                "route_id": 40,
                                "schedule_relationship": 0,
                                "start_date": "20240917"
                            },
                            "position": {
                                "bearing": 282,
                                "latitude": -41.3181801,
                                "longitude": 174.7966614
                            },
                            "occupancy_status": 1,
                            "vehicle": {
                                "id": "1471"
                            },
                            "timestamp": 1726515037
                        }
                    }
                ]
            }
        ]
    ];

    function getPath(): string {
        return "/gtfs-rt/vehiclepositions";
    }

    it.each(dataSet)("GetGtfsRtVehiclePosition", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, function () {
            return new Promise(function (resolve) {
                resolve(mockData);
            });
        });

        const client: MetlinkHttpClient = getHttpClient(axios);
        const response = await client.getVehiclePositions();
        const data = await response.data();

        const result = SchemaValidator.validate(data, getSchema());

        expect(result.isValid).toBeTruthy();
    });
});