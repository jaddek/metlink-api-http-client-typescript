import axios from 'axios';
import MockAdapter from "axios-mock-adapter";

const mock: MockAdapter = new MockAdapter(axios);

describe.skip("Response Data Decorator: GTFS-RT: Service alerts", () => {

    afterEach(function () {
        mock.reset();
    });

    const dataSet = [
        [
            [
                {
                    "header": {
                        "gtfsRealtimeVersion": "2.0",
                        "incrementality": 0,
                        "timestamp": 1726282687
                    },
                    "entity": [
                        {
                            "alert": {
                                "active_period": [
                                    {
                                        "start": 1714071600,
                                        "end": 1734635400
                                    }
                                ],
                                "effect": "STOP_MOVED",
                                "cause": "OTHER_CAUSE",
                                "description_text": {
                                    "translation": [
                                        {
                                            "language": "en",
                                            "text": "To minimise delays caused by Wairarapa services, the 7:00am, 7:40am, and 8:00am services from Upper Hutt to Wellington will depart from Platform 2 at Wallaceville and Trentham stations. This is an ongoing permanent change. Announcements will be made where possible."
                                        }
                                    ]
                                },
                                "header_text": {
                                    "translation": [
                                        {
                                            "language": "en",
                                            "text": "The 7:00am, 7:40am, and 8:00am weekday services from Upper Hutt to Wellington will depart from Platform 2 at Wallaceville and Trentham stations."
                                        }
                                    ]
                                },
                                "informed_entity": [
                                    {
                                        "route_id": "5",
                                        "route_type": 2,
                                        "trip": {
                                            "start_time": "07:00:00",
                                            "description": "7:00am from Upper Hutt Station to Wellington Station",
                                            "trip_id": "HVL__1__2611__RAIL__Rail_MTuWThF-XHol_20240428",
                                            "direction_id": 1,
                                            "route_id": 5,
                                            "start_date": "20240508"
                                        }
                                    }
                                ],
                                "severity_level": "WARNING"
                            },
                            "id": "140453",
                            "timestamp": "2024-04-24T13:33:25+1200"
                        }
                    ]
                }
            ]
        ]
    ];

    function getPath(): string {
        return "/gtfs-rt/servicealerts";
    }

    it.each(dataSet)("getServiceAlerts", async (mockData) => {
    });
});