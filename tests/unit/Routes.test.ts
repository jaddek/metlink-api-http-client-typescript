import {Routes} from "../../src/Routes";

describe("Routes", () => {
    test("Test getGtfsAgenciesPath", () => {
        const path = Routes.getGtfsAgenciesPath();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getGtfsCalendarPath", () => {
        const path = Routes.getGtfsCalendarPath();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getGtfsCalendarDatesPath", () => {
        const path = Routes.getGtfsCalendarDatesPath();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getGtfsFeedInfoPath", () => {
        const path = Routes.getGtfsFeedInfoPath();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getGtfsRoutesPath", () => {
        const path = Routes.getGtfsRoutesPath();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getGtfsStopTimesPath", () => {
        const path = Routes.getGtfsStopTimesPath();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getGtfsShapesPath", () => {
        const path = Routes.getGtfsShapesPath();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getGtfsStopsPath", () => {
        const path = Routes.getGtfsStopsPath();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getGtfsTransfersPath", () => {
        const path = Routes.getGtfsTransfersPath();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getGtfsTripsPath", () => {
        const path = Routes.getGtfsTripsPath();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getGtfsRtServiceAlertsPath", () => {
        const path = Routes.getGtfsRtServiceAlertsPath();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getGtfsRtTripUpdatesPath", () => {
        const path = Routes.getGtfsRtTripUpdatesPath();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getGtfsRtVehiclePositionsPath", () => {
        const path = Routes.getGtfsRtVehiclePositionsPath();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getTripCancellations", () => {
        const path = Routes.getTripCancellations();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })

    test("Test getStopPredictions", () => {
        const path = Routes.getStopPredictions();

        expect(path).not.toBe("");
        expect(path).not.toBeNull();
    })
})