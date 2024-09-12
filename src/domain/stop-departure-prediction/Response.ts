import {ResponseDTO} from "../../Contracts";
import {Departure} from "./Departure";

export class Response implements ResponseDTO {
    private readonly _fareZone: number;
    private readonly _closed: boolean;
    private readonly _departures: Departure[];


    constructor(fareZone: number, closed: boolean, departures: Departure[]) {
        this._fareZone = fareZone;
        this._closed = closed;
        this._departures = departures;
    }

    get fareZone(): number {
        return this._fareZone;
    }

    get closed(): boolean {
        return this._closed;
    }

    get departures(): Departure[] {
        return this._departures;
    }

    isCollection(): boolean {
        return false;
    }
}