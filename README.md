This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Docker Documentation

To run the app on docker, run the following commands:

```
// Build the app on Docker
docker build -t weatherly:1.0.0 .

// Run the app
docker run --rm -it --name web -p 3000:3000 weatherly:1.0.0

```