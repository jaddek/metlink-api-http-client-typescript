import {MetlinkHttpClientBuilder} from "../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../SchemaValidator";

describe("Functional: Metlink Http Client: Agencies", () => {
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

    test("getAgencies", async () => {
        return;
        // const client = MetlinkHttpClientBuilder.buildWithAxios("")
        // // const client: MetlinkHttpClient = getHttpClient(axios);
        // const response = await client.getAgencies();
        // const data = await response.data();
        //
        // const result = SchemaValidator.validate(data, getSchema());
        // expect(result.isValid).toBeTruthy();
    });
});