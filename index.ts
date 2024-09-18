import MetlinkHttpClient from "./src/MetlinkHttpClient";
import {MetlinkHttpClientBuilder} from "./src/MetlinkHttpClientBuilder";
import {Query} from "./src/domain/trip-cancellation/Query";
import * as fs from 'fs';
import {ResponseDecorator} from "./src/ResponseDecorator";

const token = fs.readFileSync(".token", "utf-8");

const httpClient: MetlinkHttpClient = MetlinkHttpClientBuilder.buildWithAxios(token);

httpClient.getGtfsAgencies();
httpClient.getGtfsCalendar();
httpClient.getGtfsCalendarDates();
httpClient.getGtfsFeedInfo();
httpClient.getGtfsRoutes();
httpClient.getGtfsShapes("shapeId");
httpClient.getGtfsStopTimes("tripId");
httpClient.getGtfsStops();
httpClient.getGtfsTransfers();
httpClient.getGtfsTrips();
httpClient.getGtfsServiceAlerts();
httpClient.getGtfsRtTripUpdates();
httpClient.getGtfsRtVehiclePositions();
httpClient.getStopPredictions("stopId");

const query: Query = new Query();
query.dateCreated = Date.now().toString();
httpClient.getTripCancellation(query);

/**
 * Mapped entities
 */

const decorator = new ResponseDecorator(httpClient);

decorator.getGtfsAgencies()
decorator.getGtfsCalendar()
decorator.getGtfsCalendarDates()
decorator.getGtfsFeedInfo()
