# Metlink API HTTP Client (Wellington)

## Install

--

## How to use

### Host
```
https://api.opendata.metlink.org.nz/v1
```
### Init
```ts
const metlinkHttpClient: MetlinkHttpClient = MetlinkHttpClientBuilder.buildWithAxios(token);
```

## API

### GTFS

#### Agencies

Transit agencies with service represented in this dataset.

```ts
httpClient.getAgencies();
```

#### Calendars

Service dates specified using a weekly schedule with start and end dates.

```ts
httpClient.getCalendar();
```

#### Calendar Dates

Exceptions for the services defined in the calendar.

```ts
httpClient.getCalendarDates();
```

#### Feed info

Dataset metadata, including publisher, version, and expiration information.

```ts
httpClient.getFeedInfo();
```

#### Routes
Transit routes. A route is a group of trips that are displayed to riders as a single service.

```ts
httpClient.getRoutes();
```

#### Shapes

Rules for mapping vehicle travel paths, sometimes referred to as route alignments.

```ts
httpClient.getShapes("shapeId");
```

#### Stop Times

Times that a vehicle arrives at and departs from stops for each trip.

```ts
httpClient.getStopTimes("tripId");
```

#### Stops

Stops where vehicles pick up or drop off riders. Also defines stations and station entrances.

```ts
httpClient.getStops();
```

#### Transfers

Rules for making connections at transfer points between routes.

```ts
httpClient.getTransfers();
```

#### Trips

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

### GTFS-RT 

#### Service Alerts

Information about unforeseen events affecting routes, stops, or the network. Use accept header 'application/x-protobuf'
to receive in Protobuf format.

```ts
httpClient.getServiceAlerts();
```

#### Trip Updates

Delays, cancellations, changed routes. Use accept header 'application/x-protobuf' to receive in Protobuf format.

```ts
httpClient.getTripUpdates();
```

#### Vehicle Positions

Information about vehicles including location. Use accept header 'application/x-protobuf' to receive in Protobuf format.

```ts
httpClient.getVehiclePositions();
```

### Other

#### Stop Departure Predictions

Predictions for when vehicles will arrive and depart through stops.

```ts
httpClient.getStopPredictions("stopId");
```

#### Trip Cancellations

Historical, current, and known future data for trip cancellations.

```ts
const query: Query = new Query();
query.dateCreated = Date.now().toString();
httpClient.getTripCancellation(query);
```