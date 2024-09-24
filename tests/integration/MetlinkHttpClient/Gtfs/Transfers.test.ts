import {MetlinkHttpClientBuilder} from "../../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../../SchemaValidator";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";

describe("Integration: Metlink Http Client: Transfers", () => {

    function getSchema(): object {
        return {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "from_stop_id": {
                        "type": "string"
                    },
                    "to_stop_id": {
                        "type": "string"
                    },
                    "transfer_type": {
                        "type": "string"
                    },
                    "min_transfer_time": {
                        "type": "string"
                    },
                    "from_trip_id": {
                        "type": "string"
                    },
                    "to_trip_id": {
                        "type": "string"
                    }
                },
                "required": [
                    "id",
                    "from_stop_id",
                    "to_stop_id",
                    "transfer_type",
                    "min_transfer_time",
                    "from_trip_id",
                    "to_trip_id"
                ],
                "additionalProperties": false
            }
        }
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getGtfsTransfers", async () => {
        const client: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsTransfers();

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});