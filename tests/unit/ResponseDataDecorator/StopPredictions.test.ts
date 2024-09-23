import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import {MetlinkHttpClientInterface} from "../../../src/Contracts";
import {ClientBuilder} from "../ClientBuilder";
import {Response} from "../../../src/domain/stop-departure-prediction/Response";

const mock: MockAdapter = new MockAdapter(axios);

describe("Response Data Decorator: Stop predictions", () => {

    const STOP_ID: string = "5515";


    afterEach(function (): void {
        mock.reset();
    });

    const dataSet = [
        [
            {
                "farezone": "7",
                "closed": false,
                "departures": [
                    {
                        "stop_id": "WALL2",
                        "service_id": "HVL",
                        "direction": "outbound",
                        "operator": "RAIL",
                        "origin": {
                            "stop_id": "WELL1",
                            "name": "WgtnStn"
                        },
                        "destination": {
                            "stop_id": "UPPE",
                            "name": "UPPE - All stops"
                        },
                        "delay": "PT2M37S",
                        "vehicle_id": "4263",
                        "name": "WallacevilleStn",
                        "arrival": {
                            "aimed": "2024-09-17T07:51:00+12:00",
                            "expected": "2024-09-17T07:53:37+12:00"
                        },
                        "departure": {
                            "aimed": "2024-09-17T07:51:00+12:00",
                            "expected": "2024-09-17T07:53:37+12:00"
                        },
                        "status": "delayed",
                        "monitored": true,
                        "wheelchair_accessible": true,
                        "trip_id": "HVL__0__2616__RAIL__Rail_MTuWThF-XHol_20240825"
                    },
                ]

            }
        ]
    ];

    function getPath(urlSearchParams: URLSearchParams | null = null): string {
        let query: string = "";

        if (urlSearchParams) {
            query = "?"+urlSearchParams?.toString();
        }

        return "/stop-predictions" + query;
    }


    it.each(dataSet)("getStopPredictions", async (mockData) => {
        mock.onGet(getPath(new URLSearchParams({"stop_id": STOP_ID}))).replyOnce(200, mockData);

        const client: MetlinkHttpClientInterface = ClientBuilder.getHttpClientWithResponseDataDecorator(axios);
        const entity: Response = await client.getStopPredictions(STOP_ID);

        expect(entity).toBeInstanceOf(Response)
    });
});