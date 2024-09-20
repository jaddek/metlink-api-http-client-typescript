import {MetlinkHttpClientBuilder} from "../../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../../SchemaValidator";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";

describe("Integration: Metlink Http Client: StopTimes", () => {

    function getSchema(): {} {
        return {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "trip_id": {
                        "type": "string"
                    },
                    "arrival_time": {
                        "type": "string",
                        "pattern": "^\\d{2}:\\d{2}:\\d{2}$"  // Format HH:MM:SS
                    },
                    "departure_time": {
                        "type": "string",
                        "pattern": "^\\d{2}:\\d{2}:\\d{2}$"  // Format HH:MM:SS
                    },
                    "stop_id": {
                        "type": "string"
                    },
                    "stop_sequence": {
                        "type": "integer"
                    },
                    "shape_dist_traveled": {
                        "type": "number"
                    },
                    "stop_headsign": {
                        "type": "string"
                    },
                    "pickup_type": {
                        "type": "integer",
                    },
                    "drop_off_type": {
                        "type": "integer",
                    },
                    "timepoint": {
                        "type": "string",
                    }
                },
                "required": [
                    "id",
                    "trip_id",
                    "arrival_time",
                    "departure_time",
                    "stop_id",
                    "stop_sequence",
                    "shape_dist_traveled",
                    "stop_headsign",
                    "pickup_type",
                    "drop_off_type",
                    "timepoint"
                ],
                "additionalProperties": false
            }
        }
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getGtfsStopTimes", async () => {
        const client: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsStopTimes("60__0__439__MNM__2071__1__2071__1_20240825");

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});