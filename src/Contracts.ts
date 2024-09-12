export interface ResponseDTO {
    isCollection(): boolean;
}

export abstract class Entity {
    public getKeys(): Array<keyof this> {
        return Object.keys(this) as Array<keyof this>;
    }

    public toArray(): any[] {
        return [];
    }
}

export interface GTFSInterface {
    getAgency(): ResponseDTO;

    getCalendar(): ResponseDTO;

    getCalendarDates(): ResponseDTO;

    getFeedInfo(): ResponseDTO;

    getRoutes(routeId: string | null): ResponseDTO;

    getShapes(shapeId: string): ResponseDTO;

    getStopTimes(tripId: string): ResponseDTO;

    getStops(routeId: string | null, tripId: string | null): ResponseDTO;

    getTransfers(): ResponseDTO;

    getTrips(
        start: string | null,
        extraFields: string | null,
        routeId: string | null,
        tripId: string | null,
        end: string | null
    ): ResponseDTO;
}

export interface GTFSRealTimeInterface {
    getServiceAlerts(useProtoBuf: boolean): ResponseDTO;

    getTripUpdates(useProtoBuf: boolean): ResponseDTO;

    getVehiclePositions(useProtoBuf: boolean): ResponseDTO;
}

export interface StopDeparturePredictionsInterface {
    getStopPredictions(stopId: string | null): ResponseDTO;
}

export interface TripCancellationInterface {
    getTripCancellation(query: TripCancellationQueryInterface | null): ResponseDTO;
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