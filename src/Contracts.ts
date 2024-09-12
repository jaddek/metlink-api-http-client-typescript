export interface ResponseDTO {
    isCollection(): boolean;
}

export interface HeadersDictInterface {
    [key: string]: string;
}

export abstract class Entity {

}

export interface HostInterface {
    readonly host: string;
    readonly version: string;

    getPath(): string;
}

export interface GTFSInterface {
    getAgency(): Promise;

    getCalendar(): Promise;

    getCalendarDates(): Promise;

    getFeedInfo(): Promise;

    getRoutes(
        routeId: string | null,
    ): Promise;

    getShapes(
        shapeId: string,
    ): Promise;

    getStopTimes(
        tripId: string,
    ): Promise;

    getStops(
        routeId: string | null,
        tripId: string | null,
    ): Promise;

    getTransfers(): Promise;

    getTrips(
        start: string | null,
        extraFields: string | null,
        routeId: string | null,
        tripId: string | null,
        end: string | null,
    ): Promise;
}

export interface GTFSRealTimeInterface {
    getServiceAlerts(
        useProtoBuf: boolean,
    ): Promise;

    getTripUpdates(
        useProtoBuf: boolean,
    ): Promise;

    getVehiclePositions(
        useProtoBuf: boolean,
    ): Promise;
}

export interface StopDeparturePredictionsInterface {
    getStopPredictions(
        stopId: string | null,
    ): Promise;
}

export interface TripCancellationInterface {
    getTripCancellation(
        query: TripCancellationQueryInterface | null,
    ): Promise;
}

export interface TripCancellationQueryInterface {
    get dateUpdated(): string | null;

    get dateUpdatedMax(): string | null;

    get reinstated(): string | null;

    get dateStart(): string | null;

    get dateEnd(): string | null;

    get partCancellation(): string | null;

    get dateCreated(): string | null;

    get routeId(): string | null;

    get tripId(): string | null;

    get dateCreatedMax(): string | null;
}