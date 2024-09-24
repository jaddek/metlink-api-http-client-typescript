import MetlinkHttpClient from '../../../../src/MetlinkHttpClient'
import axios from 'axios'
import { AxiosAdapter } from '../../../../src/domain/httpclient/AxiosAdapter'
import MockAdapter from 'axios-mock-adapter'
import { SchemaValidator } from '../../../SchemaValidator'

const mock: MockAdapter = new MockAdapter(axios)

describe('Metlink Http Client: Routes', () => {
    afterEach(function () {
        mock.reset()
    })

    function getHttpClient(client: Axios.AxiosInstance): MetlinkHttpClient {
        const adapter: AxiosAdapter = new AxiosAdapter(client)

        return new MetlinkHttpClient(adapter)
    }

    function getSchema(): object {
        return {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                    },
                    route_id: {
                        type: 'string',
                    },
                    agency_id: {
                        type: 'string',
                    },
                    route_short_name: {
                        type: 'string',
                    },
                    route_long_name: {
                        type: 'string',
                    },
                    route_desc: {
                        type: 'string',
                    },
                    route_type: {
                        type: 'integer',
                    },
                    route_color: {
                        type: 'string',
                        pattern: '^[0-9a-fA-F]{6}$', // Hex color code without the '#'
                    },
                    route_text_color: {
                        type: 'string',
                        pattern: '^[0-9a-fA-F]{6}$', // Hex color code without the '#'
                    },
                    route_url: {
                        type: 'string',
                    },
                    route_sort_order: {
                        type: 'integer',
                    },
                },
                required: [
                    'id',
                    'route_id',
                    'agency_id',
                    'route_short_name',
                    'route_long_name',
                    'route_desc',
                    'route_type',
                    'route_color',
                    'route_text_color',
                    'route_url',
                    'route_sort_order',
                ],
                additionalProperties: false,
            },
        }
    }

    const dataSet = [
        [
            [
                {
                    id: 9,
                    route_id: '10',
                    agency_id: 'TZM',
                    route_short_name: '1',
                    route_long_name:
                        'Johnsonville West/Churton Park/Grenada Village - Island Bay',
                    route_desc:
                        'Island Bay - Johnsonville West/Churton Park/Grenada Village',
                    route_type: 3,
                    route_color: 'e31837',
                    route_text_color: 'ffffff',
                    route_url: '',
                    route_sort_order: 10,
                },
            ],
        ],
    ]

    function getPath(stopId: string | null = null): string {
        const query: URLSearchParams = new URLSearchParams()
        let prefix = ''
        if (stopId) {
            query.append('stop_id', stopId)
            prefix = '?'
        }

        return '/gtfs/routes' + prefix + query.toString()
    }

    it.each(dataSet)('getGtfsRoutes', async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData)

        const client: MetlinkHttpClient = getHttpClient(axios)
        const response = await client.getGtfsRoutes()

        const result = SchemaValidator.validate(response.data, getSchema())

        expect(result.isValid).toBeTruthy()
    })

    it.each(dataSet)('getRouteById', async (mockData) => {
        mock.onGet(getPath('1100')).replyOnce(200, mockData)

        const client: MetlinkHttpClient = getHttpClient(axios)
        const response = await client.getGtfsRoutes('1100')

        const result = SchemaValidator.validate(response.data, getSchema())
        expect(result.isValid).toBeTruthy()
    })
})
