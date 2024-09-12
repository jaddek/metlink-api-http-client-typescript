import {QueryBuilder} from "../../src/QueryBuilder";
import {Query} from "../../src/domain/trip-cancellation/Query";

describe("Query Builder", () => {
    test("Build query test", () => {
        let query = new Query();
        let dateCreated: string = Date.now().toString();

        query.dateCreated = dateCreated;
        let urlSearchParams = QueryBuilder.buildQuery(query);

        expect(urlSearchParams).toBeInstanceOf(URLSearchParams);
        expect("dateCreated=" + dateCreated).toEqual(urlSearchParams.toString())
    })

    test("Build query test with null", () => {
        let dateCreated: string = Date.now().toString();

        let urlSearchParams = QueryBuilder.buildQuery(null);

        expect(urlSearchParams).toBeInstanceOf(URLSearchParams);
        expect("").toEqual(urlSearchParams.toString())
    })
});