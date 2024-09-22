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
                            "alert": {
                                "type": "object",
                                "properties": {
                                    "active_period": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "start": {
                                                    "type": "integer"
                                                },
                                                "end": {
                                                    "type": "integer"
                                                }
                                            },
                                            "required": ["start", "end"]
                                        }
                                    },
                                    "effect": {
                                        "type": "string"
                                    },
                                    "cause": {
                                        "type": "string"
                                    },
                                    "description_text": {
                                        "type": "object",
                                        "properties": {
                                            "translation": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "language": {
                                                            "type": "string"
                                                        },
                                                        "text": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "required": ["language", "text"]
                                                }
                                            }
                                        },
                                        "required": ["translation"]
                                    },
                                    "header_text": {
                                        "type": "object",
                                        "properties": {
                                            "translation": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "language": {
                                                            "type": "string"
                                                        },
                                                        "text": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "required": ["language", "text"]
                                                }
                                            }
                                        },
                                        "required": ["translation"]
                                    },
                                    "informed_entity": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "route_id": {
                                                    "type": "string"
                                                },
                                                "route_type": {
                                                    "type": "integer"
                                                },
                                                "trip": {
                                                    "type": "object",
                                                    "properties": {
                                                        "start_time": {
                                                            "type": "string"
                                                        },
                                                        "description": {
                                                            "type": "string"
                                                        },
                                                        "trip_id": {
                                                            "type": "string"
                                                        },
                                                        "direction_id": {
                                                            "type": "integer"
                                                        },
                                                        "route_id": {
                                                            "type": "number"
                                                        },
                                                        "start_date": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "required": ["start_time", "description", "trip_id", "direction_id", "route_id", "start_date"]
                                                }
                                            },
                                            "required": ["route_id", "route_type", "trip"]
                                        }
                                    },
                                    "severity_level": {
                                        "type": "string"
                                    }
                                },
                                "required": ["active_period", "effect", "cause", "description_text", "header_text", "informed_entity", "severity_level"]
                            },
                            "id": {
                                "type": "string"
                            },
                            "timestamp": {
                                "type": "string"
                            }
                        },
                        "required": ["alert", "id", "timestamp"]
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
                    "timestamp": 1726282687
                },
                "entity": [
                    {
                        "alert": {
                            "active_period": [
                                {
                                    "start": 1714071600,
                                    "end": 1734635400
                                }
                            ],
                            "effect": "STOP_MOVED",
                            "cause": "OTHER_CAUSE",
                            "description_text": {
                                "translation": [
                                    {
                                        "language": "en",
                                        "text": "To minimise delays caused by Wairarapa services, the 7:00am, 7:40am, and 8:00am services from Upper Hutt to Wellington will depart from Platform 2 at Wallaceville and Trentham stations. This is an ongoing permanent change. Announcements will be made where possible."
                                    }
                                ]
                            },
                            "header_text": {
                                "translation": [
                                    {
                                        "language": "en",
                                        "text": "The 7:00am, 7:40am, and 8:00am weekday services from Upper Hutt to Wellington will depart from Platform 2 at Wallaceville and Trentham stations."
                                    }
                                ]
                            },
                            "informed_entity": [
                                {
                                    "route_id": "5",
                                    "route_type": 2,
                                    "trip": {
                                        "start_time": "07:00:00",
                                        "description": "7:00am from Upper Hutt Station to Wellington Station",
                                        "trip_id": "HVL__1__2611__RAIL__Rail_MTuWThF-XHol_20240428",
                                        "direction_id": 1,
                                        "route_id": 5,
                                        "start_date": "20240508"
                                    }
                                }
                            ],
                            "severity_level": "WARNING"
                        },
                        "id": "140453",
                        "timestamp": "2024-04-24T13:33:25+1200"
                    }
                ]
            }
        ]
    ];

    function getPath(): string {
        return "/gtfs-rt/servicealerts";
    }

    it.each(dataSet)("getServiceAlerts", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData);

        const client: MetlinkHttpClient = getHttpClient(axios);
        const response = await client.getGtfsRtServiceAlerts();

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});