import {Entity} from "../../../Contracts";

export class Calendar extends Entity {
    private readonly _id: number;
    private readonly _serviceId: string;
    private readonly _monday: number;
    private readonly _tuesday: number;
    private readonly _wednesday: number;
    private readonly _thursday: number;
    private readonly _friday: number;
    private readonly _saturday: number;
    private readonly _sunday: number;
    private readonly _startDate: string;
    private readonly _endDate: string;

    constructor(
        id: number,
        serviceId: string,
        monday: number,
        tuesday: number,
        wednesday: number,
        thursday: number,
        friday: number,
        saturday: number,
        sunday: number,
        startDate: string,
        endDate: string
    ) {
        super();
        this._id = id;
        this._serviceId = serviceId;
        this._monday = monday;
        this._tuesday = tuesday;
        this._wednesday = wednesday;
        this._thursday = thursday;
        this._friday = friday;
        this._saturday = saturday;
        this._sunday = sunday;
        this._startDate = startDate;
        this._endDate = endDate;
    }

    get id(): number {
        return this._id;
    }

    get serviceId(): string {
        return this._serviceId;
    }

    get monday(): number {
        return this._monday;
    }

    get tuesday(): number {
        return this._tuesday;
    }

    get wednesday(): number {
        return this._wednesday;
    }

    get thursday(): number {
        return this._thursday;
    }

    get friday(): number {
        return this._friday;
    }

    get saturday(): number {
        return this._saturday;
    }

    get sunday(): number {
        return this._sunday;
    }

    get startDate(): string {
        return this._startDate;
    }

    get endDate(): string {
        return this._endDate;
    }
}