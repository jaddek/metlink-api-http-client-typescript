import {MetlinkHttpClientBuilder} from "../../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../../SchemaValidator";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";

describe("Integration: Metlink Http Client: Shapes", () => {

    const ShapeId1: string = "[@364.0.17527449@]1_20240825";

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

    function getMetlinkToken(): string {
        return process.env.METLINK_TOKEN || "";
    }

    test("getGtfsShapes", async () => {
        const client: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsShapes(ShapeId1);

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});