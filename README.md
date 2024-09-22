# Metlink API HTTP Client (Wellington, New Zealand)
https://opendata.metlink.org.nz/

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jaddek_metlink-api-http-client-typescript&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=jaddek_metlink-api-http-client-typescript)

## Install

--

## How to use

### Example

Look
```ts
example.ts
```

### Host
```
https://api.opendata.metlink.org.nz/v1
```
### Init


#### Client

```ts
import {MetlinkHttpClientInterface} from "./Contracts";
import {MetlinkHttpClientBuilder} from "./MetlinkHttpClientBuilder";

const options = {
    timeout: 1000
};
const metlinkHttpClient: MetlinkHttpClientInterface
    = MetlinkHttpClientBuilder.buildWithAxios(token, options);
```
OR
```ts
import {MetlinkHttpClientInterface} from "./Contracts";
import {MetlinkHttpClientBuilder} from "./MetlinkHttpClientBuilder";

const options = {
    timeout: 1000
};
const metlinkHttpClient: MetlinkHttpClientInterface
    = MetlinkHttpClientBuilder.buildWithAxiosAndDecorate(token, options);
```
#### Wrapped response body

```ts
const metlinkHttpClient = new ResponseDataDecorator(httpClient);
```

### Tests

#### Config with env

```bash
.jest/setEnvVars
```
Use
```bash
TOKEN_FILE=.token jest tests
```

#### Unresolved issues:
- GTFS: StopTimes raise: 403
- GTFS: Shapes raise: 400
- GTFS-RT: Service Alerts: Validation Scheme issue
- GTFS-RT: Trip Updates: Validation Scheme issue
- Stop Predictions: 400

## API

### GTFS

#### Agencies

Transit agencies with service represented in this dataset.

```ts
metlinkHttpClient.getGtfsAgencies();
```

#### Calendars

Service dates specified using a weekly schedule with start and end dates.

```ts
metlinkHttpClient.getGtfsCalendar();
```

#### Calendar Dates

Exceptions for the services defined in the calendar.

```ts
metlinkHttpClient.getGtfsCalendarDates();
```

#### Feed info

Dataset metadata, including publisher, version, and expiration information.

```ts
metlinkHttpClient.getGtfsFeedInfo();
```

#### Routes
Transit routes. A route is a group of trips that are displayed to riders as a single service.

```ts
metlinkHttpClient.getGtfsRoutes();
```

#### Shapes

Rules for mapping vehicle travel paths, sometimes referred to as route alignments.

```ts
metlinkHttpClient.getGtfsShapes("shapeId");
```

#### Stop Times

Times that a vehicle arrives at and departs from stops for each trip.

```ts
metlinkHttpClient.getGtfsStopTimes("tripId");
```

#### Stops

Stops where vehicles pick up or drop off riders. Also defines stations and station entrances.

```ts
metlinkHttpClient.getGtfsStops();
```

#### Transfers

Rules for making connections at transfer points between routes.

```ts
metlinkHttpClient.getGtfsTransfers();
```

#### Trips

Trips for each route. A trip is a sequence of two or more stops that occur during a specific time period.

```ts
metlinkHttpClient.getGtfsTrips(
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
metlinkHttpClient.getGtfsServiceAlerts();
```

#### Trip Updates

Delays, cancellations, changed routes. Use accept header 'application/x-protobuf' to receive in Protobuf format.

```ts
metlinkHttpClient.getGtfsRtTripUpdates();
```

#### Vehicle Positions

Information about vehicles including location. Use accept header 'application/x-protobuf' to receive in Protobuf format.

```ts
metlinkHttpClient.getGtfsRtVehiclePositions();
```

### Other

#### Stop Departure Predictions

Predictions for when vehicles will arrive and depart through stops.

```ts
metlinkHttpClient.getStopPredictions("stopId");
```

#### Trip Cancellations

Historical, current, and known future data for trip cancellations.

```ts
const query: Query = new Query();
query.dateCreated = Date.now().toString();
metlinkHttpClient.getTripCancellation(query);
```

