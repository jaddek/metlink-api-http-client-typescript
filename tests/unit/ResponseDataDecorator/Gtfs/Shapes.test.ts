import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import {MetlinkHttpClientInterface} from "../../../../src/Contracts";
import {ClientBuilder} from "../../ClientBuilder";
import {Shape} from "../../../../src/domain/gtfs/entity/Shape";

const mock: MockAdapter = new MockAdapter(axios);

describe("Response Data Decorator: Shapes", () => {

    afterEach(function () {
        mock.reset();
    });

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
            ]
        ]
    ];

    function getPath(): string {
        return "/gtfs/shapes";
    }

    it.each(dataSet)("getGtfsShapes", async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData);

        const client: MetlinkHttpClientInterface = ClientBuilder.getHttpClientWithResponseDataDecorator(axios);
        const response:Shape[] = await client.getGtfsShapes("[@364.0.17527449@]1_20240825");

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(Shape)
        });
    });
});