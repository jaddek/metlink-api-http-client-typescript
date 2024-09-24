import {MetlinkHttpClientBuilder} from "../../../../src/MetlinkHttpClientBuilder";
import {SchemaValidator} from "../../../SchemaValidator";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";

describe("Integration: Metlink Http Client: FeedInfo", () => {

    function getSchema(): object {
        return {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "feed_publisher_name": {
                        "type": "string"
                    },
                    "feed_publisher_url": {
                        "type": "string",
                    },
                    "feed_lang": {
                        "type": "string"
                    },
                    "feed_start_date": {
                        "type": "string",
                        "pattern": "^\\d{8}$"  // Format YYYYMMDD
                    },
                    "feed_end_date": {
                        "type": "string",
                        "pattern": "^\\d{8}$"  // Format YYYYMMDD
                    },
                    "feed_version": {
                        "type": "string"
                    }
                },
                "required": [
                    "id",
                    "feed_publisher_name",
                    "feed_publisher_url",
                    "feed_lang",
                    "feed_start_date",
                    "feed_end_date",
                    "feed_version"
                ],
                "additionalProperties": false
            }
        };
    }

    function getMetlinkToken(): string
    {
        return process.env.METLINK_TOKEN || "";
    }

    test("getGtfsFeedInfo", async () => {
        const client: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsFeedInfo();

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});