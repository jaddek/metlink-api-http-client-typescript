import MetlinkHttpClient from '../../../../src/MetlinkHttpClient'
import axios from 'axios'
import { AxiosAdapter } from '../../../../src/domain/httpclient/AxiosAdapter'
import MockAdapter from 'axios-mock-adapter'
import { SchemaValidator } from '../../../SchemaValidator'

const mock: MockAdapter = new MockAdapter(axios)

describe('Metlink Http Client: GTFS-RT: Trip updates', () => {
    afterEach(function () {
        mock.reset()
    })

    function getHttpClient(client: Axios.AxiosInstance): MetlinkHttpClient {
        const adapter: AxiosAdapter = new AxiosAdapter(client)

        return new MetlinkHttpClient(adapter)
    }

    function getSchema(): object {
        return {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            properties: {
                header: {
                    type: 'object',
                    properties: {
                        gtfsRealtimeVersion: {
                            type: 'string',
                        },
                        incrementality: {
                            type: 'integer',
                        },
                        timestamp: {
                            type: 'integer',
                        },
                    },
                    required: [
                        'gtfsRealtimeVersion',
                        'incrementality',
                        'timestamp',
                    ],
                },
                entity: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            trip_update: {
                                type: 'object',
                                properties: {
                                    stop_time_update: {
                                        type: 'object',
                                        properties: {
                                            schedule_relationship: {
                                                type: 'integer',
                                            },
                                            stop_sequence: {
                                                type: 'integer',
                                            },
                                            arrival: {
                                                type: 'object',
                                                properties: {
                                                    delay: {
                                                        type: 'integer',
                                                    },
                                                    time: {
                                                        type: 'integer',
                                                    },
                                                },
                                                required: ['delay', 'time'],
                                            },
                                            stop_id: {
                                                type: 'string',
                                            },
                                        },
                                        required: [
                                            'schedule_relationship',
                                            'stop_sequence',
                                            'arrival',
                                            'stop_id',
                                        ],
                                    },
                                    trip: {
                                        type: 'object',
                                        properties: {
                                            start_time: {
                                                type: 'string',
                                            },
                                            trip_id: {
                                                type: 'string',
                                            },
                                            direction_id: {
                                                type: 'integer',
                                            },
                                            route_id: {
                                                type: 'integer',
                                            },
                                            schedule_relationship: {
                                                type: 'integer',
                                            },
                                            start_date: {
                                                type: 'string',
                                            },
                                        },
                                        required: [
                                            'start_time',
                                            'trip_id',
                                            'direction_id',
                                            'route_id',
                                            'schedule_relationship',
                                            'start_date',
                                        ],
                                    },
                                    vehicle: {
                                        type: 'object',
                                        properties: {
                                            id: {
                                                type: 'string',
                                            },
                                        },
                                        required: ['id'],
                                    },
                                    timestamp: {
                                        type: 'integer',
                                    },
                                },
                                required: [
                                    'stop_time_update',
                                    'trip',
                                    'vehicle',
                                    'timestamp',
                                ],
                            },
                            id: {
                                type: 'string',
                            },
                        },
                        required: ['trip_update', 'id'],
                    },
                },
            },
            required: ['header', 'entity'],
        }
    }

    const dataSet = [
        [
            {
                header: {
                    gtfsRealtimeVersion: '2.0',
                    incrementality: 0,
                    timestamp: 1726514766,
                },
                entity: [
                    {
                        trip_update: {
                            stop_time_update: {
                                schedule_relationship: 0,
                                stop_sequence: 36,
                                arrival: {
                                    delay: 237,
                                    time: 1726514769,
                                },
                                stop_id: '9242',
                            },
                            trip: {
                                start_time: '06:55:00',
                                trip_id:
                                    '110__0__103__TZM__501__4__501__4_20240825',
                                direction_id: 0,
                                route_id: 1100,
                                schedule_relationship: 0,
                                start_date: '20240917',
                            },
                            vehicle: {
                                id: '3315',
                            },
                            timestamp: 1726514757,
                        },
                        id: 'fb9742b0-b5c3-46ca-99cf-c4f24668607d',
                    },
                ],
            },
        ],
    ]

    function getPath(): string {
        return '/gtfs-rt/tripupdates'
    }

    it.each(dataSet)('GetGtfsRtTripUpdates', async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData)

        const client: MetlinkHttpClient = getHttpClient(axios)
        const response = await client.getGtfsRtTripUpdates()

        const result = SchemaValidator.validate(response.data, getSchema())
        expect(result.isValid).toBeTruthy()
    })
})
