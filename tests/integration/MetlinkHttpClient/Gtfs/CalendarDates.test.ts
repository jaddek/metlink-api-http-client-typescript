import {MetlinkHttpClientBuilder} from "../../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../../SchemaValidator";
import MetlinkHttpClient from "../../../../src/MetlinkHttpClient";

describe("Integration: Metlink Http Client: Calendar Dates", () => {
    function getSchema(): {} {
        return {
            type: "array",
            items: {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "service_id": {
                        "type": "string"
                    },
                    "date": {
                        "type": "string",
                        "pattern": "^\\d{8}$"  // Format YYYYMMDD
                    },
                    "exception_type": {
                        "type": "integer",
                    }
                },
                "required": ["id", "service_id", "date", "exception_type"],
                "additionalProperties": false
            }
        };
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getGtfsCalendarDates", async () => {
        const client: MetlinkHttpClient = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsCalendarDates();

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});