import {Collection} from "../../src/Response";

describe("Response", () => {
    test("Test add", () => {
        let collection: Collection<any> = new Collection<any>();

        collection.add(1);

        expect(collection.size()).toEqual(1);

        collection.add(2);
        collection.add(3);

        expect(collection.size()).toEqual(3);

    });

    test("Test remove", () => {
        let collection: Collection<any> = new Collection<any>();

        collection.add(1);
        collection.add(2);
        collection.add(3);
        collection.remove(1);

        expect(collection.size()).toEqual(2);
    });

    test("Test getItems", () => {
        let collection: Collection<any> = new Collection<any>();

        collection.add(1);
        collection.add(2);
        collection.add(3);

        collection.getItems().forEach(function (value) {
            expect(value).not.toBeNull();
        })
    });

    test("Test size", () => {
        let collection: Collection<any> = new Collection<any>();

        collection.add(1);
        collection.add(2);
        collection.add(3);

        expect(collection.size()).toEqual(3);
    });

    test("Test is collection", () => {
        let collection: Collection<any> = new Collection<any>();

        expect(collection.isCollection()).toEqual(true);
    });
});