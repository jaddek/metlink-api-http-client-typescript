import MetlinkHttpClient from "../../../../src/MetlinkHttpClient";
import axios from 'axios';
import {AxiosAdapter} from "../../../../src/domain/httpclient/AxiosAdapter";
import MockAdapter from "axios-mock-adapter";
import {SchemaValidator} from "../../../SchemaValidator";

const mock: MockAdapter = new MockAdapter(axios);

describe("Metlink Http Client: Shapes", () => {

    const ShapeId1: string = "[@364.0.17527449@]1_20240825";

    afterEach(function () {
        mock.reset();
    });

    function getHttpClient(client: Axios.AxiosInstance): MetlinkHttpClient {
        const adapter: AxiosAdapter = new AxiosAdapter(client);

        return new MetlinkHttpClient(adapter);
    }

    function getSchema(): object {
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

    const dataSet = [
        [
            [
                {
                    "id": 92441,
                    "shape_id": "[@364.0.17527449@]1_20240825",
                    "shape_pt_lat": -41.2091982,
                    "shape_pt_lon": 174.9050033,
                    "shape_pt_sequence": 0,
                    "shape_dist_traveled": 0
                }
            ],
        ],
    ];

    function getPath(shapeId: string): string {
        const query: URLSearchParams = new URLSearchParams({
            "shape_id": shapeId
        });

        return "/gtfs/shapes?"+query.toString();
    }

    it.each(dataSet)("getGtfsShapes", async (mockData) => {
        mock.onGet(getPath(ShapeId1)).replyOnce(200, mockData);

        const client: MetlinkHttpClient = getHttpClient(axios);
        const response = await client.getGtfsShapes(ShapeId1);

        const result = SchemaValidator.validate(response.data, getSchema());
        expect(result.isValid).toBeTruthy();
    });
});