import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { MetlinkHttpClientInterface } from '../../../../src/Contracts'
import { ClientBuilder } from '../../ClientBuilder'
import { Agency } from '../../../../src/domain/gtfs/entity/Agency'

const mock: MockAdapter = new MockAdapter(axios)

describe('Response Data Decorator: Agencies', () => {
    afterEach(function () {
        mock.reset()
    })

    const dataSet = [
        [
            [
                {
                    id: 1,
                    agency_id: 'An',
                    agency_name: 'Agency name',
                    agency_timezone: 'Pacific/Auckland',
                    agency_url: 'https://someling',
                    agency_lang: 'en',
                    agency_phone: '',
                    agency_fare_url:
                        'http://somelinks.com',
                },
            ],
        ],
    ]

    function getPath(): string {
        return '/gtfs/agency'
    }

    it.each(dataSet)('getGtfsAgencies', async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData)

        const client: MetlinkHttpClientInterface =
            ClientBuilder.getHttpClientWithResponseDataDecorator(axios)
        const response: Agency[] = await client.getGtfsAgencies()

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(Agency)
        })
    })
})
