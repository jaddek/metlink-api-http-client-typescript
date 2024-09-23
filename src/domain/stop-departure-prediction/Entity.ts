import {Origin} from "./Origin";
import {Destination} from "./Destination";
import {Arrival} from "./Arrival";
import {Departure} from "./Departure";

/**
 *       "stop_id": "5515",
 *       "service_id": "2",
 *       "direction": "outbound",
 *       "operator": "NBM",
 *       "origin": {
 *         "stop_id": "7042",
 *         "name": "Seatoun-HectorSt"
 *       },
 *       "destination": {
 *         "stop_id": "5332",
 *         "name": "Karori"
 *       },
 *       "delay": "PT3M27S",
 *       "vehicle_id": "5722",
 *       "name": "MannersSt at Cuba-A",
 *       "arrival": {
 *         "aimed": "2024-09-12T14:13:00+12:00",
 *         "expected": "2024-09-12T14:16:27+12:00"
 *       },
 *       "departure": {
 *         "aimed": "2024-09-12T14:13:00+12:00",
 *         "expected": "2024-09-12T14:17:16+12:00"
 *       },
 *       "status": "delayed",
 *       "monitored": true,
 *       "wheelchair_accessible": true,
 *       "trip_id": "2__0__231__NBM__67__1__67__1_20240825"
 */
export class Entity {
    private readonly _stopId: string;
    private readonly _serviceId: string;
    private readonly _direction: string;
    private readonly _operator: string;
    private readonly _origin: Origin;
    private readonly _destination: Destination;
    private readonly _delay: string;
    private readonly _vehicleId: string;
    private readonly _name: string;
    private readonly _arrival: Arrival;
    private readonly _departure: Departure;
    private readonly _status: string;
    private readonly _monitored: boolean;
    private readonly _wheelChairAccessible: boolean;
    private readonly _tripId: string;

    constructor(
        stopId: string,
        serviceId: string,
        direction: string,
        operator: string,
        origin: Origin,
        destination: Destination,
        delay: string,
        vehicleId: string,
        name: string,
        arrival: Arrival,
        departure: Departure,
        status: string,
        monitored: boolean,
        wheelChairAccessible: boolean,
        tripId: string
    ) {
        this._stopId = stopId;
        this._serviceId = serviceId;
        this._direction = direction;
        this._operator = operator;
        this._origin = origin;
        this._destination = destination;
        this._delay = delay;
        this._vehicleId = vehicleId;
        this._name = name;
        this._arrival = arrival;
        this._departure = departure;
        this._status = status;
        this._monitored = monitored;
        this._wheelChairAccessible = wheelChairAccessible;
        this._tripId = tripId;
    }

    get stopId(): string {
        return this._stopId;
    }

    get serviceId(): string {
        return this._serviceId;
    }

    get direction(): string {
        return this._direction;
    }

    get operator(): string {
        return this._operator;
    }

    get origin(): Origin {
        return this._origin;
    }

    get destination(): Destination {
        return this._destination;
    }

    get delay(): string {
        return this._delay;
    }

    get vehicleId(): string {
        return this._vehicleId;
    }

    get name(): string {
        return this._name;
    }

    get arrival(): Arrival {
        return this._arrival;
    }

    get departure(): Departure {
        return this._departure;
    }

    get status(): string {
        return this._status;
    }

    get monitored(): boolean {
        return this._monitored;
    }

    get wheelChairAccessible(): boolean {
        return this._wheelChairAccessible;
    }

    get tripId(): string {
        return this._tripId;
    }
}