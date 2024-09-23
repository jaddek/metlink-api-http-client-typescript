import {MetlinkHttpClientBuilder} from "../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../SchemaValidator";
import {MetlinkHttpClientInterface} from "../../../src/Contracts";

describe("Integration: Metlink Http Client: Stop Predictions", () => {


    function getSchema(): {} {
        return {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "type": "object",
            "properties": {
                "farezone": {
                    "type": "string"
                },
                "closed": {
                    "type": "boolean"
                },
                "departures": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "stop_id": {
                                "type": "string"
                            },
                            "service_id": {
                                "type": "string"
                            },
                            "direction": {
                                "type": "string",
                                "enum": ["inbound", "outbound"]
                            },
                            "operator": {
                                "type": "string"
                            },
                            "origin": {
                                "type": "object",
                                "properties": {
                                    "stop_id": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    }
                                },
                                "required": ["stop_id", "name"]
                            },
                            "destination": {
                                "type": "object",
                                "properties": {
                                    "stop_id": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    }
                                },
                                "required": ["stop_id", "name"]
                            },
                            "delay": {
                                "type": "string",
                            },
                            "vehicle_id": {
                                "type": ["string","null"]
                            },
                            "name": {
                                "type": "string"
                            },
                            "arrival": {
                                "type": "object",
                                "properties": {
                                    "aimed": {
                                        "type": "string"
                                    },
                                    "expected": {
                                        "type": ["string", "null"]
                                    }
                                },
                                "required": ["aimed", "expected"]
                            },
                            "departure": {
                                "type": "object",
                                "properties": {
                                    "aimed": {
                                        "type": "string"
                                    },
                                    "expected": {
                                        "type": ["string", "null"]
                                    }
                                },
                                "required": ["aimed", "expected"]
                            },
                            "status": {
                                "type": ["string", "null"]
                            },
                            "monitored": {
                                "type": "boolean"
                            },
                            "wheelchair_accessible": {
                                "type": "boolean"
                            },
                            "trip_id": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "stop_id",
                            "service_id",
                            "direction",
                            "operator",
                            "origin",
                            "destination",
                            "delay",
                            "vehicle_id",
                            "name",
                            "arrival",
                            "departure",
                            "status",
                            "monitored",
                            "wheelchair_accessible",
                            "trip_id"
                        ]
                    }
                }
            },
            "required": ["farezone", "closed", "departures"]
        }
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getStopPredictions", async () => {
        const client: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getStopPredictions("5515");

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});