# Weatherly

This is a weather forecast application built with Next.js and Chakra UI. Testing was done with Jest and React Testing Library.


## Features

* Check weather-related forecast for a 3-day interval.
* Populates the location fields with the user's location, if geolocation is allowed.
* Displays an image in the background that is related to the weather forecast.
* Remember data from a forecast and perform a subsequent forecast based on it.


## Docker Deployment Instructions

To run the app on docker, run the following commands:

```
// Build the app on Docker
docker build -t weatherly:1.0.0 .

// Run the app
docker run --rm -it --name web -p 3000:3000 weatherly:1.0.0

```