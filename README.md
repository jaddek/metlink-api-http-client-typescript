# Metlink Wellington API HTTP Client

```ts
import HttpClient from "./src/HttpClient";
import {HttpClientBuilder} from "./src/HttpClientBuilder";

const httpClient: httpClient = HttpClientBuilder.build("test-token");
```

## GTFS Agencies

Transit agencies with service represented in this dataset.

```ts
httpClient.getAgency();
```

## GTFS Calendars

Service dates specified using a weekly schedule with start and end dates.

```ts
httpClient.getCalendar();
```

## GTFS Calendar Dates

Exceptions for the services defined in the calendar.

```ts
httpClient.getCalendarDates();
```

## GTFS Feed info

Dataset metadata, including publisher, version, and expiration information.

```ts
httpClient.getFeedInfo();
```

## GTFS Routes

Transit routes. A route is a group of trips that are displayed to riders as a single service.

```ts
httpClient.getRoutes();
```

## GTFS Shapes

Rules for mapping vehicle travel paths, sometimes referred to as route alignments.

```ts
httpClient.getShapes("shapeId");
```

## GTFS Stop Times

Times that a vehicle arrives at and departs from stops for each trip.

```ts
httpClient.getStopTimes("tripId");
```

## GTFS Stops

Stops where vehicles pick up or drop off riders. Also defines stations and station entrances.

```ts
httpClient.getStops();
```

## GTFS Transfers

Rules for making connections at transfer points between routes.

```ts
httpClient.getTransfers();
```

## GTFS Trips

Trips for each route. A trip is a sequence of two or more stops that occur during a specific time period.

```ts
httpClient.getTrips(
    "start",
    "extraFields",
    "routeId",
    "tripId",
    "end"
);
```

## GTFS-RT Service Alerts

Information about unforeseen events affecting routes, stops, or the network. Use accept header 'application/x-protobuf'
to receive in Protobuf format.

```ts
httpClient.getServiceAlerts();
```

## GTFS-RT Trip Updates

Delays, cancellations, changed routes. Use accept header 'application/x-protobuf' to receive in Protobuf format.

```ts
httpClient.getTripUpdates();
```

## GTFS-RT Vehicle Positions

Information about vehicles including location. Use accept header 'application/x-protobuf' to receive in Protobuf format.

```ts
httpClient.getVehiclePositions();
```

## Stop Departure Predictions

Predictions for when vehicles will arrive and depart through stops.

```ts
httpClient.getStopPredictions("stopId");
```

## Trip Cancellations

Historical, current, and known future data for trip cancellations.

```ts
const query: Query = new Query();
query.dateCreated = Date.now().toString();
httpClient.getTripCancellation(query);
```