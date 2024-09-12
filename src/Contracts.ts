export interface ResponseDTO {
    isCollection(): boolean;
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