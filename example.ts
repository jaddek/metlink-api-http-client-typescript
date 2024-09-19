import MetlinkHttpClient from "./src/MetlinkHttpClient";
import {MetlinkHttpClientBuilder} from "./src/MetlinkHttpClientBuilder";
import {Query} from "./src/domain/trip-cancellation/Query";
import * as fs from 'fs';
import {ResponseDataDecorator} from "./src/ResponseDataDecorator";
import {MetlinkHttpClientInterface} from "./src/Contracts";

const token = fs.readFileSync(".token", "utf-8");
const axiosOptions = {};

const httpClient: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxios(token, axiosOptions);

httpClient.getGtfsAgencies();
httpClient.getGtfsCalendar();
httpClient.getGtfsCalendarDates();
httpClient.getGtfsFeedInfo();
httpClient.getGtfsRoutes("routeId");
httpClient.getGtfsShapes("shapeId");
httpClient.getGtfsStopTimes("tripId");
httpClient.getGtfsStops(null, null);
httpClient.getGtfsTransfers();
httpClient.getGtfsTrips();
httpClient.getGtfsRtTripUpdates();
httpClient.getGtfsRtVehiclePositions();
httpClient.getStopPredictions("stopId");
httpClient.getGtfsServiceAlerts();


const query: Query = new Query();
query.dateCreated = Date.now().toString();
httpClient.getTripCancellation(query);

/**
 * Mapped entities
 */

const httpClientDecorated: MetlinkHttpClientInterface = MetlinkHttpClientBuilder.buildWithAxiosUsingResponseDataDecorator(token, axiosOptions);
// OR
const httpClientDecorated: MetlinkHttpClientInterface = new ResponseDataDecorator(httpClient);

httpClientDecorated.getGtfsAgencies()
httpClientDecorated.getGtfsCalendar()
httpClientDecorated.getGtfsCalendarDates()
httpClientDecorated.getGtfsFeedInfo()
httpClientDecorated.getGtfsRoutes("routeId")
httpClientDecorated.getGtfsShapes("shapeId")
httpClientDecorated.getGtfsStopTimes("tripId");
httpClientDecorated.getGtfsStops();
httpClientDecorated.getGtfsTransfers();
httpClientDecorated.getGtfsTrips();