import axios from 'axios';
import MockAdapter from "axios-mock-adapter";

const mock: MockAdapter = new MockAdapter(axios);

describe.skip("Response Data Decorator: GTFS-RT: Vehicle positions", () => {

    afterEach(function () {
        mock.reset();
    });

    const dataSet = [
        [
            {
                "header": {
                    "gtfsRealtimeVersion": "2.0",
                    "incrementality": 0,
                    "timestamp": 1726515043
                },
                "entity": [
                    {
                        "id": "258a7bb5-3ae7-4436-a7d5-340893394391",
                        "vehicle": {
                            "trip": {
                                "start_time": "07:15:00",
                                "trip_id": "4__1__112__NBM__7__5__7__5_20240825",
                                "direction_id": 1,
                                "route_id": 40,
                                "schedule_relationship": 0,
                                "start_date": "20240917"
                            },
                            "position": {
                                "bearing": 282,
                                "latitude": -41.3181801,
                                "longitude": 174.7966614
                            },
                            "occupancy_status": 1,
                            "vehicle": {
                                "id": "1471"
                            },
                            "timestamp": 1726515037
                        }
                    }
                ]
            }
        ]
    ];

    function getPath(): string {
        return "/gtfs-rt/vehiclepositions";
    }

    it.each(dataSet)("GetGtfsRtVehiclePosition", async (mockData) => {
    });
});