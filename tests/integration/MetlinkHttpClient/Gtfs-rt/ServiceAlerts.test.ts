import {MetlinkHttpClientBuilder} from "../../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../../SchemaValidator";
import MetlinkHttpClient from "../../../../src/MetlinkHttpClient";

describe("Integration: Metlink Http Client: Service Alerts", () => {

    function getSchema(): {} {
        return {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "type": "array",
            "items": {
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
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getGtfsTrips", async () => {
        const client: MetlinkHttpClient = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsServiceAlerts();

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});