import { QueryBuilder } from '../../src/QueryBuilder'
import { Query } from '../../src/domain/trip-cancellation/Query'

describe('Query Builder', () => {
    test('Build query test', () => {
        const query = new Query()
        const dateCreated: string = Date.now().toString()

        query.dateCreated = dateCreated
        const urlSearchParams = QueryBuilder.buildQuery(query)

        expect(urlSearchParams).toBeInstanceOf(URLSearchParams)
        expect('dateCreated=' + dateCreated).toEqual(urlSearchParams.toString())
    })

    test('Build query test with null', () => {
        const urlSearchParams = QueryBuilder.buildQuery(null)

        expect(urlSearchParams).toBeInstanceOf(URLSearchParams)
        expect('').toEqual(urlSearchParams.toString())
    })
})
