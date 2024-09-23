import {MetlinkHttpClientBuilder} from "../../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../../SchemaValidator";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";

describe("Integration: Metlink Http Client: Trip Updates", () => {

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
                            "trip_update": {
                                "type": "object",
                                "properties": {
                                    "stop_time_update": {
                                        "type": "object",
                                        "properties": {
                                            "schedule_relationship": {
                                                "type": "integer"
                                            },
                                            "stop_sequence": {
                                                "type": "integer"
                                            },
                                            "arrival": {
                                                "type": "object",
                                                "properties": {
                                                    "delay": {
                                                        "type": "integer"
                                                    },
                                                    "time": {
                                                        "type": "integer"
                                                    }
                                                },
                                                "required": ["delay", "time"]
                                            },
                                            "stop_id": {
                                                "type": "string"
                                            }
                                        },
                                        "required": ["stop_sequence", "arrival", "stop_id"]
                                    },
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
                                            "schedule_relationship": {
                                                "type": "integer"
                                            },
                                            "start_date": {
                                                "type": "string"
                                            }
                                        },
                                        "required": ["trip_id", "direction_id", "schedule_relationship", "start_date"]
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
                                "required": ["stop_time_update", "trip", "vehicle", "timestamp"]
                            },
                            "id": {
                                "type": "string"
                            }
                        },
                        "required": ["trip_update", "id"]
                    }
                }
            },
            "required": ["header", "entity"]
        }
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getGtfsRtTripUpdates", async () => {
        const client: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsRtTripUpdates();

        const result = SchemaValidator.validate(response.data, getSchema());

        expect(result.isValid).toBeTruthy();
    });
});