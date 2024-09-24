import { MetlinkHttpClientBuilder } from '../../../../src/MetlinkHttpClientBuilder'
import { SchemaValidator } from '../../../SchemaValidator'
import { MetlinkHttpClientInterface } from '../../../../src/Contracts'

describe('Integration: Metlink Http Client: Vehicle Positions', () => {
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
                            id: {
                                type: 'string',
                            },
                            vehicle: {
                                type: 'object',
                                properties: {
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
                                    position: {
                                        type: 'object',
                                        properties: {
                                            bearing: {
                                                type: 'integer',
                                            },
                                            latitude: {
                                                type: 'number',
                                            },
                                            longitude: {
                                                type: 'number',
                                            },
                                        },
                                        required: [
                                            'bearing',
                                            'latitude',
                                            'longitude',
                                        ],
                                    },
                                    occupancy_status: {
                                        type: 'integer',
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
                                    'trip',
                                    'position',
                                    'vehicle',
                                    'timestamp',
                                ],
                            },
                        },
                        required: ['id', 'vehicle'],
                    },
                },
            },
            required: ['header', 'entity'],
        }
    }

    function getMetlinkToken(): string {
        return process.env.METLINK_TOKEN || ''
    }

    test('getGtfsRtVehiclePositions', async () => {
        const client: MetlinkHttpClientInterface =
            MetlinkHttpClientBuilder.buildWithAxios(getMetlinkToken())
        const response = await client.getGtfsRtVehiclePositions()

        const result = SchemaValidator.validate(response.data, getSchema())
        expect(result.isValid).toBeTruthy()
    })
})
