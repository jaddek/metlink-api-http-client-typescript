import {MetlinkHttpClientBuilder} from "../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../SchemaValidator";
import {MetlinkHttpClientInterface} from "../../../src/Contracts";

describe("Integration: Metlink Http Client: Trip Cancellations", () => {

    function getSchema(): {} {
        return {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "date_created": {
                        "type": "string",
                    },
                    "date_updated": {
                        "type": "string",
                    },
                    "trip_id": {
                        "type": "string"
                    },
                    "route_id": {
                        "type": "integer"
                    },
                    "trip_date_start": {
                        "type": "string",
                    },
                    "trip_date_end": {
                        "type": "string"
                    },
                    "direction_id": {
                        "type": "integer"
                    },
                    "reinstated": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "part_cancellation": {
                        "type": "integer",
                        "enum": [0, 1]
                    }
                },
                "required": [
                    "id",
                    "date_created",
                    "date_updated",
                    "trip_id",
                    "route_id",
                    "trip_date_start",
                    "trip_date_end",
                    "direction_id",
                    "reinstated",
                    "part_cancellation"
                ]
            }
        }
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getTripCancellation", async () => {
        const client: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getTripCancellation();

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});