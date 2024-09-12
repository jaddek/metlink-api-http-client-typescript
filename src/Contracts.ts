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

    getRoutes(): ResponseDTO;

    getShapes(): ResponseDTO;

    getStopTimes(tripId: number): ResponseDTO;

    getStops(): ResponseDTO;

    getTransfers(): ResponseDTO;

    getTrips(): ResponseDTO;
}

export interface GTFSRealTimeInterface {
    getServiceAlerts(): ResponseDTO;

    getTripUpdates(): ResponseDTO;

    getVehiclePositions(): ResponseDTO;
}

export interface StopDeparturePredictionsInterface {
    getStopPredictions(): ResponseDTO;
}

export interface TripCancellationInterface {
    getTripCancellation(): ResponseDTO;
}