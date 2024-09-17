import {MetlinkHttpClientBuilder} from "../../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../../SchemaValidator";
import MetlinkHttpClient from "../../../../src/MetlinkHttpClient";

describe("Integration: Metlink Http Client: Shapes", () => {

    function getSchema(): {} {
        return {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "shape_id": {
                        "type": "string"
                    },
                    "shape_pt_lat": {
                        "type": "number"
                    },
                    "shape_pt_lon": {
                        "type": "number"
                    },
                    "shape_pt_sequence": {
                        "type": "integer"
                    },
                    "shape_dist_traveled": {
                        "type": "number"
                    }
                },
                "required": [
                    "id",
                    "shape_id",
                    "shape_pt_lat",
                    "shape_pt_lon",
                    "shape_pt_sequence",
                    "shape_dist_traveled"
                ],
                "additionalProperties": false
            }
        };
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getGtfsShapes", async () => {
        const client: MetlinkHttpClient = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsShapes("[@364.0.17527449@]1_20240825");

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});