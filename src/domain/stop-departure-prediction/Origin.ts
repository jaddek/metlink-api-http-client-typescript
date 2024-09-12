export class Origin
{
    private readonly _stopId: string;
    private readonly _name: string;

    constructor(stopId: string, name: string) {
        this._stopId = stopId;
        this._name = name;
    }

    get stopId(): string {
        return this._stopId;
    }

    get name(): string {
        return this._name;
    }
}