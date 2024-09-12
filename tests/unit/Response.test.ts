import {Collection} from "../../src/Response";

describe("Response", () => {
    test("Test add", () => {
        const collection: Collection<any> = new Collection<any>();

        collection.add(1);

        expect(collection.size()).toEqual(1);

        collection.add(2);
        collection.add(3);

        expect(collection.size()).toEqual(3);
    });

    test("Test remove", () => {
        const collection: Collection<any> = new Collection<any>();

        collection.add(1);
        collection.add(2);
        collection.add(3);
        collection.remove(1);

        expect(collection.size()).toEqual(2);
    });

    test("Test getItems", () => {
        const collection: Collection<any> = new Collection<any>();

        collection.add(1);
        collection.add(2);
        collection.add(3);

        collection.getItems().forEach(function (value) {
            expect(value).not.toBeNull();
        })
    });

    test("Test size", () => {
        const collection: Collection<any> = new Collection<any>();

        collection.add(1);
        collection.add(2);
        collection.add(3);

        expect(collection.size()).toEqual(3);
    });

    test("Test is collection", () => {
        const collection: Collection<any> = new Collection<any>();

        expect(collection.isCollection()).toEqual(true);
    });
});