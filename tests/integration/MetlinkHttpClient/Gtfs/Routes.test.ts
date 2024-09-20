import {MetlinkHttpClientBuilder} from "../../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../../SchemaValidator";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";

describe("Integration: Metlink Http Client: Routes", () => {

    function getSchema(): {} {
        return {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "route_id": {
                        "type": "string"
                    },
                    "agency_id": {
                        "type": "string"
                    },
                    "route_short_name": {
                        "type": "string"
                    },
                    "route_long_name": {
                        "type": "string"
                    },
                    "route_desc": {
                        "type": "string"
                    },
                    "route_type": {
                        "type": "integer"
                    },
                    "route_color": {
                        "type": "string",
                        "pattern": "^[0-9a-fA-F]{6}$"  // Hex color code without the '#'
                    },
                    "route_text_color": {
                        "type": "string",
                        "pattern": "^[0-9a-fA-F]{6}$"  // Hex color code without the '#'
                    },
                    "route_url": {
                        "type": "string"
                    },
                    "route_sort_order": {
                        "type": "integer"
                    }
                },
                "required": [
                    "id",
                    "route_id",
                    "agency_id",
                    "route_short_name",
                    "route_long_name",
                    "route_desc",
                    "route_type",
                    "route_color",
                    "route_text_color",
                    "route_url",
                    "route_sort_order"
                ],
                "additionalProperties": false
            }
        }
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getGtfsRoutes", async () => {
        const client: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsRoutes();

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});