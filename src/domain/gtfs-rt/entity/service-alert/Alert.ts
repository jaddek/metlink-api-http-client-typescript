import {ActivePeriod} from "./ActivePeriod";
import {InformedEntity} from "./InformedEntity";

export default class Alert {
    private readonly _activePeriod: ActivePeriod[];
    private readonly _effect: string;
    private readonly _cause: string;
    private readonly _descriptionText: object;
    private readonly _headerText: object;
    private readonly _informedEntity: InformedEntity[];
    private readonly _severityLevel: string;


    constructor(
        activePeriod: ActivePeriod[],
        effect: string,
        cause: string,
        descriptionText: object,
        headerText: object,
        informedEntity: InformedEntity[],
        severityLevel: string
    ) {
        this._activePeriod = activePeriod;
        this._effect = effect;
        this._cause = cause;
        this._descriptionText = descriptionText;
        this._headerText = headerText;
        this._informedEntity = informedEntity;
        this._severityLevel = severityLevel;
    }

    get activePeriod(): ActivePeriod[] {
        return this._activePeriod;
    }

    get effect(): string {
        return this._effect;
    }

    get cause(): string {
        return this._cause;
    }

    get descriptionText(): object {
        return this._descriptionText;
    }

    get headerText(): object {
        return this._headerText;
    }

    get informedEntity(): InformedEntity[] {
        return this._informedEntity;
    }

    get severityLevel(): string {
        return this._severityLevel;
    }
}