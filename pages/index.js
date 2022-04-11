import Head from 'next/head';
import { Box, VStack, Text } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import Card from '../src/components/Card';
import { useState } from 'react';
import useSWR from 'swr';

// Pre-fetch list of countries and cities
export const getStaticProps = async () => {
  const res = await fetch('https://countrycontinentlists.herokuapp.com/countries/all');
  const data = await res.json();

  return {
    props: {
      countryData: data.res
    }
  }
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home({countryData}) {
  const [weatherCondition, setWeatherCondition] = useState(null);
  const updateWeatherCondition = (condition) => setWeatherCondition(condition);

  // Get image from Unsplash that matches the weather condition, then update background image
  const { data } = useSWR(
    weatherCondition ? `${process.env.NEXT_PUBLIC_UNSPLASH_API_BASE_URL}&query=${weatherCondition}` : null,
    fetcher,
    {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    }
  );
  const background = data ? `url(${data.results[0].urls.regular})` : 'brand.primary';

  return (
    // You can visit https://chakra-ui.com/ and https://nextjs.org/docs to understand the use cases
    // of the components that Chakra UI and Next.js provides respectively
    <Box background={background} backgroundRepeat='no-repeat' backgroundSize='cover'>
      <Head>
        <title className={styles.title}>Weatherly - A Weather Forecast App</title>
        <meta name="description" content="A weather forecast app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <VStack spacing={6}>
          <Text as='h1' fontFamily='cursive' fontSize='160%' data-testid="app-title">Weatherly</Text>
          <Card updateWeatherCondition={updateWeatherCondition} countryData={countryData} />
        </VStack>
      </main>
    </Box>
  )
}
