export class Routes
{

    public static getGtfsAgenciesPath(): string {
        return "/gtfs/agency";
    }

    public static getGtfsCalendarPath(): string {
        return "/gtfs/calendar";
    }

    public static getGtfsCalendarDatesPath(): string {
        return "/gtfs/calendar_dates";
    }

    public static getGtfsFeedInfoPath(): string {
        return "/gtfs/feed_info";
    }

    public static getGtfsRoutesPath(): string {
        return "/gtfs/routes";
    }

    public static getGtfsStopTimesPath(): string {
        return "/gtfs/shop_times";
    }

    public static getGtfsShapesPath(): string {
        return "/gtfs/shapes";
    }

    public static getGtfsStopsPath(): string {
        return "/gtfs/stops";
    }

    public static getGtfsTransfersPath(): string {
        return "/gtfs/transfers";
    }

    public static getGtfsTripsPath(): string {
        return "/gtfs/trips";
    }

    public static getGtfsRtServiceAlertsPath(): string {
        return "/gtfs-rt/servicealerts";
    }

    public static getGtfsRtTripUpdatesPath(): string {
        return "/gtfs-rt/tripupdates";
    }

    public static getGtfsRtVehiclePositionsPath(): string {
        return "/gtfs-rt/vehiclepositions";
    }

    public static getTripCancellations(): string {
        return "/trip-cancellations";
    }

    public static getStopPredictions(): string {
        return "/stop-predictions";
    }

}