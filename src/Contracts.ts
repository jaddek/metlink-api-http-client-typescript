export interface ResponseDTO {
    isCollection(): boolean;
}

export interface MetlinkHttpClientInterface extends TripCancellationInterface,
    StopDeparturePredictionsInterface,
    GTFSRealTimeInterface,
    GTFSInterface {

}

export interface HeadersDictInterface {
    [key: string]: string;
}

interface EntityInterface {
    [key: string]: string | number | null | object;
}

export abstract class Entity implements EntityInterface {
    [key: string]: string | number | null | object;
}

export interface HostInterface {
    readonly host: string;
    readonly version: string;

    getUrl(): string;
}

export interface GTFSInterface {
    getGtfsAgencies(): Promise<any>;

    getGtfsCalendar(): Promise<any>;

    getGtfsCalendarDates(): Promise<any>;

    getGtfsFeedInfo(): Promise<any>;

    getGtfsRoutes(
        routeId?: string | null,
    ): Promise<any>;

    getGtfsShapes(
        shapeId: string,
    ): Promise<any>;

    getGtfsStopTimes(
        tripId: string,
    ): Promise<any>;

    getGtfsStops(
        routeId?: string | null,
        tripId?: string | null,
    ): Promise<any>;

    getGtfsTransfers(): Promise<any>;

    getGtfsTrips(
        start?: string | null,
        extraFields?: string | null,
        routeId?: string | null,
        tripId?: string | null,
        end?: string | null,
    ): Promise<any>;
}

export interface GTFSRealTimeInterface {
    getGtfsServiceAlerts(
        useProtoBuf?: boolean,
    ): Promise<any>;

    getGtfsRtTripUpdates(
        useProtoBuf?: boolean,
    ): Promise<any>;

    getGtfsRtVehiclePositions(
        useProtoBuf?: boolean,
    ): Promise<any>;
}

export interface StopDeparturePredictionsInterface {
    getStopPredictions(
        stopId?: string | null,
    ): Promise<any>;
}

export interface TripCancellationInterface {
    getTripCancellations(
        query?: TripCancellationQueryInterface | null,
    ): Promise<any>;
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