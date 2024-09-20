import {MetlinkHttpClientBuilder} from "../../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../../SchemaValidator";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";

describe("Integration: Metlink Http Client: Agencies", () => {
    function getSchema(): {} {
        return {
            type: "array",
            items: {
                type: "object",
                properties: {
                    id: {type: "integer"},
                    agency_id: {type: "string"},
                    agency_name: {type: "string"},
                    agency_timezone: {type: "string"},
                    agency_url: {type: "string"},
                    agency_lang: {type: "string"},
                    agency_phone: {type: "string"},
                    agency_fare_url: {type: "string"},
                },
                required: [
                    "id",
                    "agency_id",
                    "agency_name",
                    "agency_timezone",
                    "agency_url",
                    "agency_lang",
                    "agency_phone",
                    "agency_fare_url"
                ],
                additionalProperties: false,
            },
        };
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getGtfsAgencies", async () => {
        const client: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsAgencies();

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});