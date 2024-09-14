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

    getUrl(): string;
}

export interface GTFSInterface {
    getAgencies(): Promise<Response>;

    getCalendar(): Promise<Response>;

    getCalendarDates(): Promise<Response>;

    getFeedInfo(): Promise<Response>;

    getRoutes(
        routeId: string | null,
    ): Promise<Response>;

    getShapes(
        shapeId: string,
    ): Promise<Response>;

    getStopTimes(
        tripId: string,
    ): Promise<Response>;

    getStops(
        routeId: string | null,
        tripId: string | null,
    ): Promise<Response>;

    getTransfers(): Promise<Response>;

    getTrips(
        start: string | null,
        extraFields: string | null,
        routeId: string | null,
        tripId: string | null,
        end: string | null,
    ): Promise<Response>;
}

export interface GTFSRealTimeInterface {
    getServiceAlerts(
        useProtoBuf: boolean,
    ): Promise<Response>;

    getTripUpdates(
        useProtoBuf: boolean,
    ): Promise<Response>;

    getVehiclePositions(
        useProtoBuf: boolean,
    ): Promise<Response>;
}

export interface StopDeparturePredictionsInterface {
    getStopPredictions(
        stopId: string | null,
    ): Promise<Response>;
}

export interface TripCancellationInterface {
    getTripCancellation(
        query: TripCancellationQueryInterface | null,
    ): Promise<Response>;
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