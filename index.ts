import HttpClient from "./src/HttpClient";
import {HttpClientBuilder} from "./src/HttpClientBuilder";
import {Query} from "./src/domain/trip-cancellation/Query";

const httpClient: HttpClient = HttpClientBuilder.build("test-token");

httpClient.getAgency();
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