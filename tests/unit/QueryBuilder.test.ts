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
});