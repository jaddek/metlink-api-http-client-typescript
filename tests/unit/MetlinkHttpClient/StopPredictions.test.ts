import MetlinkHttpClient from '../../../src/MetlinkHttpClient'
import axios from 'axios'
import { AxiosAdapter } from '../../../src/domain/httpclient/AxiosAdapter'
import MockAdapter from 'axios-mock-adapter'
import { SchemaValidator } from '../../SchemaValidator'

const mock: MockAdapter = new MockAdapter(axios)

describe('Metlink Http Client: Stop predictions', () => {
    const STOP_ID = 'Well1'

    afterEach(function (): void {
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
                farezone: {
                    type: 'string',
                },
                closed: {
                    type: 'boolean',
                },
                departures: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            stop_id: {
                                type: 'string',
                            },
                            service_id: {
                                type: 'string',
                            },
                            direction: {
                                type: 'string',
                                enum: ['inbound', 'outbound'],
                            },
                            operator: {
                                type: 'string',
                            },
                            origin: {
                                type: 'object',
                                properties: {
                                    stop_id: {
                                        type: 'string',
                                    },
                                    name: {
                                        type: 'string',
                                    },
                                },
                                required: ['stop_id', 'name'],
                            },
                            destination: {
                                type: 'object',
                                properties: {
                                    stop_id: {
                                        type: 'string',
                                    },
                                    name: {
                                        type: 'string',
                                    },
                                },
                                required: ['stop_id', 'name'],
                            },
                            delay: {
                                type: 'string',
                                pattern: '^PT\\d+M\\d+S$',
                            },
                            vehicle_id: {
                                type: 'string',
                            },
                            name: {
                                type: 'string',
                            },
                            arrival: {
                                type: 'object',
                                properties: {
                                    aimed: {
                                        type: 'string',
                                    },
                                    expected: {
                                        type: 'string',
                                    },
                                },
                                required: ['aimed', 'expected'],
                            },
                            departure: {
                                type: 'object',
                                properties: {
                                    aimed: {
                                        type: 'string',
                                    },
                                    expected: {
                                        type: 'string',
                                    },
                                },
                                required: ['aimed', 'expected'],
                            },
                            status: {
                                type: 'string',
                                enum: ['on time', 'delayed', 'cancelled'],
                            },
                            monitored: {
                                type: 'boolean',
                            },
                            wheelchair_accessible: {
                                type: 'boolean',
                            },
                            trip_id: {
                                type: 'string',
                            },
                        },
                        required: [
                            'stop_id',
                            'service_id',
                            'direction',
                            'operator',
                            'origin',
                            'destination',
                            'delay',
                            'vehicle_id',
                            'name',
                            'arrival',
                            'departure',
                            'status',
                            'monitored',
                            'wheelchair_accessible',
                            'trip_id',
                        ],
                    },
                },
            },
            required: ['farezone', 'closed', 'departures'],
        }
    }

    const dataSet = [
        [
            {
                farezone: '7',
                closed: false,
                departures: [
                    {
                        stop_id: 'WALL2',
                        service_id: 'HVL',
                        direction: 'outbound',
                        operator: 'RAIL',
                        origin: {
                            stop_id: 'WELL1',
                            name: 'WgtnStn',
                        },
                        destination: {
                            stop_id: 'UPPE',
                            name: 'UPPE - All stops',
                        },
                        delay: 'PT2M37S',
                        vehicle_id: '4263',
                        name: 'WallacevilleStn',
                        arrival: {
                            aimed: '2024-09-17T07:51:00+12:00',
                            expected: '2024-09-17T07:53:37+12:00',
                        },
                        departure: {
                            aimed: '2024-09-17T07:51:00+12:00',
                            expected: '2024-09-17T07:53:37+12:00',
                        },
                        status: 'delayed',
                        monitored: true,
                        wheelchair_accessible: true,
                        trip_id:
                            'HVL__0__2616__RAIL__Rail_MTuWThF-XHol_20240825',
                    },
                ],
            },
        ],
    ]

    function getPath(urlSearchParams: URLSearchParams | null = null): string {
        let query: string = ''

        if (urlSearchParams) {
            query = '?' + urlSearchParams?.toString()
        }

        return '/stop-predictions' + query
    }

    it.each(dataSet)('getStopPredictions', async (mockData) => {
        mock.onGet(
            getPath(new URLSearchParams({ stop_id: STOP_ID }))
        ).replyOnce(200, mockData)

        const client: MetlinkHttpClient = getHttpClient(axios)
        const response = await client.getStopPredictions(STOP_ID)

        const result = SchemaValidator.validate(response.data, getSchema())
        expect(result.isValid).toBeTruthy()
    })
})
