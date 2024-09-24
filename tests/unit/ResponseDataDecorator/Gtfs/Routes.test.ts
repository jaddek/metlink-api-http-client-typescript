import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { MetlinkHttpClientInterface } from '../../../../src/Contracts'
import { ClientBuilder } from '../../ClientBuilder'
import { Route } from '../../../../src/domain/gtfs/entity/Route'

const mock: MockAdapter = new MockAdapter(axios)

describe('Response Data Decorator: Routes', () => {
    afterEach(function () {
        mock.reset()
    })

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

        const client: MetlinkHttpClientInterface =
            ClientBuilder.getHttpClientWithResponseDataDecorator(axios)
        const response: Route[] = await client.getGtfsRoutes(null)

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(Route)
        })
    })

    it.each(dataSet)('getRouteById', async (mockData) => {
        mock.onGet(getPath('1100')).replyOnce(200, mockData)

        const client: MetlinkHttpClientInterface =
            ClientBuilder.getHttpClientWithResponseDataDecorator(axios)
        const response: Route[] = await client.getGtfsRoutes('1100')

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(Route)
        })
    })
})
