import {ResponseDTO} from "./Contracts";

abstract class CollectionResponse implements ResponseDTO {
    public isCollection(): boolean {
        return true;
    }
}

abstract class ItemResponse implements ResponseDTO {
    public isCollection(): boolean {
        return false;
    }
}

export class Collection<V> extends CollectionResponse {
    _collection: V[] = [];

    add(item: V): void {
        this._collection.push(item);
    }

    remove(item: V): boolean {
        const index = this._collection.indexOf(item);
        if (index === -1) return false;
        this._collection.splice(index, 1);
        return true;
    }

    getItems(): V[] {
        return this._collection;
    }

    size(): number {
        return this._collection.length;
    }
}