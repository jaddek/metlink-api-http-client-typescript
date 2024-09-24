import {MetlinkHttpClientBuilder} from "../../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../../SchemaValidator";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";

describe("Integration: Metlink Http Client: Calendar", () => {
    function getSchema(): object {
        return {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "service_id": {
                        "type": "string"
                    },
                    "monday": {
                        "type": "integer",
                        "enum": [0, 1]  // Assuming 0 or 1 represent days of service (0 = no service, 1 = service)
                    },
                    "tuesday": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "wednesday": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "thursday": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "friday": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "saturday": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "sunday": {
                        "type": "integer",
                        "enum": [0, 1]
                    },
                    "start_date": {
                        "type": "string",
                        "pattern": "^\\d{8}$"  // Format YYYYMMDD
                    },
                    "end_date": {
                        "type": "string",
                        "pattern": "^\\d{8}$"  // Format YYYYMMDD
                    }
                },
                "required": [
                    "id",
                    "service_id",
                    "monday",
                    "tuesday",
                    "wednesday",
                    "thursday",
                    "friday",
                    "saturday",
                    "sunday",
                    "start_date",
                    "end_date"
                ],
                "additionalProperties": false
            }
        };
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getGtfsCalendar", async () => {
        const client: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsCalendar();

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});