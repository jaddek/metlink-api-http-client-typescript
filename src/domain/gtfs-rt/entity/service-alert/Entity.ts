import Alert from "./Alert";

export class Entity {
    private readonly _id: string;
    private readonly _alert: Alert;
    private readonly _timestamp: string;

    constructor(id: string, alert: Alert, timestamp: string) {
        this._id = id;
        this._alert = alert;
        this._timestamp = timestamp;
    }

    get id(): string {
        return this._id;
    }

    get alert(): Alert {
        return this._alert;
    }

    get timestamp(): string {
        return this._timestamp;
    }
}