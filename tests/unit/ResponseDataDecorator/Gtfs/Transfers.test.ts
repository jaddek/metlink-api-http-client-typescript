import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { MetlinkHttpClientInterface } from '../../../../src/Contracts'
import { ClientBuilder } from '../../ClientBuilder'
import { Transfer } from '../../../../src/domain/gtfs/entity/Transfer'

const mock: MockAdapter = new MockAdapter(axios)

describe('Response Data Decorator: Transfers', () => {
    afterEach(function () {
        mock.reset()
    })

    const dataSet = [
        [
            [
                {
                    id: 1,
                    from_stop_id: '9416',
                    to_stop_id: 'SILV',
                    transfer_type: '2',
                    min_transfer_time: '240',
                    from_trip_id: '115__0__421__TZM__508__3__508__3_20240825',
                    to_trip_id: 'HVL__1__3853__RAIL__Rail_SaSu+Hol_20240825',
                },
            ],
        ],
    ]

    function getPath(): string {
        return '/gtfs/transfers'
    }

    it.each(dataSet)('getGtfsTransfers', async (mockData) => {
        mock.onGet(getPath()).replyOnce(200, mockData)

        const client: MetlinkHttpClientInterface =
            ClientBuilder.getHttpClientWithResponseDataDecorator(axios)
        const response: Transfer[] = await client.getGtfsTransfers()

        response.forEach((entity) => {
            expect(entity).toBeInstanceOf(Transfer)
        })
    })
})
