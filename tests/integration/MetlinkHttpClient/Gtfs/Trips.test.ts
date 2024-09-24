import {MetlinkHttpClientBuilder} from "../../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../../SchemaValidator";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";

describe("Integration: Metlink Http Client: Trips", () => {

    function getSchema(): object {
        return {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "route_id": {
                        "type": "integer"
                    },
                    "service_id": {
                        "type": "string"
                    },
                    "trip_id": {
                        "type": "string"
                    },
                    "trip_headsign": {
                        "type": "string"
                    },
                    "direction_id": {
                        "type": "integer"
                    },
                    "block_id": {
                        "type": "string"
                    },
                    "shape_id": {
                        "type": "string"
                    },
                    "wheelchair_accessible": {
                        "type": "integer"
                    },
                    "bikes_allowed": {
                        "type": "integer"
                    },
                    "origin_stop_id": {
                        "type": "string"
                    },
                    "destination_stop_id": {
                        "type": "string"
                    }
                },
                "required": [
                    "id",
                    "route_id",
                    "service_id",
                    "trip_id",
                    "trip_headsign",
                    "direction_id",
                    "block_id",
                    "shape_id",
                    "wheelchair_accessible",
                    "bikes_allowed",
                    "origin_stop_id",
                    "destination_stop_id"
                ],
                "additionalProperties": false
            }
        }
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getGtfsTrips", async () => {
        const client: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsTrips();

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});