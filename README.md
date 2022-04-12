# Weatherly

This is a weather forecast application built with Next.js and Chakra UI. Testing was done with Jest and React Testing Library

## Docker Deployment Instructions

To run the app on docker, run the following commands:

```
// Build the app on Docker
docker build -t weatherly:1.0.0 .

// Run the app
docker run --rm -it --name web -p 3000:3000 weatherly:1.0.0

```