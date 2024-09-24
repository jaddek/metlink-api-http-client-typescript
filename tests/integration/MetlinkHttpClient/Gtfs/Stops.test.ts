import {MetlinkHttpClientBuilder} from "../../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../../SchemaValidator";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";

describe("Integration: Metlink Http Client: Stops", () => {

    function getSchema(): object {
        return {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "stop_id": {
                        "type": "string"
                    },
                    "stop_code": {
                        "type": "string"
                    },
                    "stop_name": {
                        "type": "string"
                    },
                    "stop_desc": {
                        "type": "string"
                    },
                    "zone_id": {
                        "type": "string"
                    },
                    "stop_lat": {
                        "type": "number"
                    },
                    "stop_lon": {
                        "type": "number"
                    },
                    "location_type": {
                        "type": "integer"
                    },
                    "parent_station": {
                        "type": "string"
                    },
                    "stop_url": {
                        "type": "string"
                    },
                    "stop_timezone": {
                        "type": "string"
                    }
                },
                "required": [
                    "id",
                    "stop_id",
                    "stop_code",
                    "stop_name",
                    "stop_desc",
                    "zone_id",
                    "stop_lat",
                    "stop_lon",
                    "location_type",
                    "parent_station",
                    "stop_url",
                    "stop_timezone"
                ],
                "additionalProperties": false
            }
        }
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getGtfsStops", async () => {
        const client: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsStops();

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});