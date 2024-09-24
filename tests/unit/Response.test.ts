import {Collection} from "../../src/Response";

describe("Response", () => {
    test("Test add", () => {
        const collection: Collection<number> = new Collection<number>();

        collection.add(1);

        expect(collection.size()).toEqual(1);

        collection.add(2);
        collection.add(3);

        expect(collection.size()).toEqual(3);
    });

    test("Test remove", () => {
        const collection: Collection<number> = new Collection<number>();

        collection.add(1);
        collection.add(2);
        collection.add(3);
        collection.remove(1);

        expect(collection.size()).toEqual(2);
    });

    test("Test getItems", () => {
        const collection: Collection<number> = new Collection<number>();

        collection.add(1);
        collection.add(2);
        collection.add(3);

        collection.getItems().forEach(function (value) {
            expect(value).not.toBeNull();
        })
    });

    test("Test size", () => {
        const collection: Collection<number> = new Collection<number>();

        collection.add(1);
        collection.add(2);
        collection.add(3);

        expect(collection.size()).toEqual(3);
    });

    test("Test is collection", () => {
        const collection: Collection<number> = new Collection<number>();

        expect(collection.isCollection()).toEqual(true);
    });
});