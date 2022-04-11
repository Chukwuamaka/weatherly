import { useState } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import cn from 'classnames';
import Form from './Form';
import styles from '../../styles/Card.module.css';
import Forecast from './Forecast';

export default function Card({updateWeatherCondition, countryData}) {
    const [activeSection, setActiveSection] = useState('data');
    // Change active section between Data and Forecast
    const changeActiveSection = (e) => {
        const textContent = e.target.textContent.toLowerCase();
        activeSection !== textContent && setActiveSection(textContent);
    }
    const [forecast, setForecast] = useState(null);

    const updateForecast = (data) => {
        // Supply forecast data to display results in Forecast component
        setForecast(data);
        // Automatically open Forecast section when forecast data is available
        setActiveSection('forecast');
        // Supply weather condition data to index.js to load the corresponding image from Unsplash
        if (data.data?.today) updateWeatherCondition(data.data?.current?.condition?.text)
        else updateWeatherCondition(data.data?.forecast?.forecastday[0]?.day?.condition?.text);
    }

    return (
        <Box rounded={12} bg='white' w={['85vw', '70vw', '60vw']} pb={10}>
            <HStack spacing={0} mb={10}>
                <Text
                    data-testid="data-section-heading"
                    className={cn({[styles.sectionHeading]: true, [styles.activeSection]: activeSection === 'data'})}
                    flex={1} fontWeight='semibold' borderRadius='12px 0 0' pl={5}
                    color='blackAlpha.700'
                    onClick={changeActiveSection}
                >
                    Data
                </Text>
                <Text
                    data-testid="forecast-section-heading"
                    className={cn({[styles.sectionHeading]: true, [styles.activeSection]: activeSection === 'forecast'})}
                    flex={1} fontWeight='semibold' borderRadius='0 12px 0 0' pr={5}
                    color='blackAlpha.700'
                    onClick={changeActiveSection}
                >
                    Forecast
                </Text>
            </HStack>
            {
                // Dynamically display the content of the Card component based on the active section
                activeSection === 'data' ? <Form updateForecast={updateForecast} countryData={countryData} /> : <Forecast forecast={forecast} />
            }
        </Box>
    )
}
