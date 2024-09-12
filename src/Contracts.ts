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
    getAgency(
        headers: HeadersDictInterface | null
    ): ResponseDTO;

    getCalendar(
        headers: HeadersDictInterface | null
    ): ResponseDTO;

    getCalendarDates(
        headers: HeadersDictInterface | null
    ): ResponseDTO;

    getFeedInfo(
        headers: HeadersDictInterface | null
    ): ResponseDTO;

    getRoutes(
        routeId: string | null,
        headers: HeadersDictInterface | null
    ): ResponseDTO;

    getShapes(
        shapeId: string,
        headers: HeadersDictInterface | null
    ): ResponseDTO;

    getStopTimes(
        tripId: string,
        headers: HeadersDictInterface | null
    ): ResponseDTO;

    getStops(
        routeId: string | null,
        tripId: string | null,
        headers: HeadersDictInterface | null
    ): ResponseDTO;

    getTransfers(
        headers: HeadersDictInterface | null
    ): ResponseDTO;

    getTrips(
        start: string | null,
        extraFields: string | null,
        routeId: string | null,
        tripId: string | null,
        end: string | null,
        headers: HeadersDictInterface | null
    ): ResponseDTO;
}

export interface GTFSRealTimeInterface {
    getServiceAlerts(
        useProtoBuf: boolean,
        headers: HeadersDictInterface | null
    ): ResponseDTO;

    getTripUpdates(
        useProtoBuf: boolean,
        headers: HeadersDictInterface | null
    ): ResponseDTO;

    getVehiclePositions(
        useProtoBuf: boolean,
        headers: HeadersDictInterface | null
    ): ResponseDTO;
}

export interface StopDeparturePredictionsInterface {
    getStopPredictions(
        stopId: string | null,
        headers: HeadersDictInterface | null
    ): ResponseDTO;
}

export interface TripCancellationInterface {
    getTripCancellation(
        query: TripCancellationQueryInterface | null,
        headers: HeadersDictInterface | null
    ): ResponseDTO;
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