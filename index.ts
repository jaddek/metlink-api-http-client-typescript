import MetlinkHttpClient from "./src/MetlinkHttpClient";
import {MetlinkHttpClientBuilder} from "./src/MetlinkHttpClientBuilder";
import {Query} from "./src/domain/trip-cancellation/Query";
import * as fs from 'fs';

const token = fs.readFileSync(".env", "utf-8");

const httpClient: MetlinkHttpClient = MetlinkHttpClientBuilder.buildWithAxios(token);


httpClient.getAgencies();
httpClient.getCalendar();
httpClient.getCalendarDates();
httpClient.getFeedInfo();
httpClient.getRoutes();
httpClient.getShapes("shapeId");
httpClient.getStopTimes("tripId");
httpClient.getStops();
httpClient.getTransfers();
httpClient.getTrips();
httpClient.getServiceAlerts();
httpClient.getTripUpdates();
httpClient.getVehiclePositions();
httpClient.getStopPredictions("stopId");

const query: Query = new Query();
query.dateCreated = Date.now().toString();
httpClient.getTripCancellation(query);
