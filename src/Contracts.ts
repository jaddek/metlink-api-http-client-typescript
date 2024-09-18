import {Agency} from "./domain/gtfs/entity/Agency";

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

export abstract class Entity {

}

export interface HostInterface {
    readonly host: string;
    readonly version: string;

    getUrl(): string;
}

export interface GTFSInterface {
    getGtfsAgencies(): Promise<Response|Agency[]>;

    getGtfsCalendar(): Promise<Response>;

    getGtfsCalendarDates(): Promise<Response>;

    getGtfsFeedInfo(): Promise<Response>;

    getGtfsRoutes(
        routeId: string | null,
    ): Promise<Response>;

    getGtfsShapes(
        shapeId: string,
    ): Promise<Response>;

    getGtfsStopTimes(
        tripId: string,
    ): Promise<Response>;

    getGtfsStops(
        routeId: string | null,
        tripId: string | null,
    ): Promise<Response>;

    getGtfsTransfers(): Promise<Response>;

    getGtfsTrips(
        start: string | null,
        extraFields: string | null,
        routeId: string | null,
        tripId: string | null,
        end: string | null,
    ): Promise<Response>;
}

export interface GTFSRealTimeInterface {
    getGtfsServiceAlerts(
        useProtoBuf: boolean,
    ): Promise<Response>;

    getGtfsRtTripUpdates(
        useProtoBuf: boolean,
    ): Promise<Response>;

    getGtfsRtVehiclePositions(
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