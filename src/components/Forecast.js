import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

export default function Forecast({forecast}) {
    const [units, setUnits] = useState({
        temp: 'c',
        wind_speed: 'mph',
        pressure: 'mb',
        precipitation: 'mm'
    });

    // Convert current units of quantities to alternate units
    const changeUnit = (e, unit1, unit2) => {
        const id = e.target.id;
        // Compare current unit with alternate unit to determine the destination unit for the conversion
        const compare = () => units[id] === unit1 ? unit2 : unit1;

        setUnits({...units, [id]: compare()})
    }

    return (
        <Box px={[3, 5]}>
            {
                !forecast || forecast.status === 'error' ? 
                    <VStack spacing={1}>
                        <Image src='/sad_face.svg' width={80} height={80} alt="Sad Face Icon" />
                        <Text textAlign='center' fontSize='110%'>{forecast ? forecast.data : 'No results to show'}</Text>
                    </VStack>
                :
                    <VStack spacing={2}>
                        <HStack spacing={2} justifyContent='center' mb={4}>
                            <Text textAlign='center' color='gray.500'>Here are your results</Text>
                            <Image src='/thumbs_up.svg' width={40} height={40} alt=''/>
                        </HStack>
                        <Text textAlign='center' fontSize={['93%', '110%']}>Location: {forecast.data?.location?.name}, {forecast.data?.location?.region}, {forecast.data?.location?.country}</Text>
                        <HStack spacing={2} justifyContent='center'>
                            <Text fontSize={['93%', '110%']}>Latitude: {forecast.data?.location?.lat}°</Text>
                            <Text fontSize={['93%', '110%']}>Longitude: {forecast.data?.location?.lon}°</Text>
                        </HStack>
                        {
                            forecast.data.today || forecast.data?.forecast.forecastday.length === 0 ?
                                <>   
                                    <HStack spacing={2} justifyContent='center' wrap='wrap'>
                                        <Text fontSize={['93%', '110%']}>Temperature: {units.temp === 'c' ? `${forecast.data?.current?.temp_c}°C` : `${forecast.data?.current?.temp_f}°F`}</Text>
                                        <Button id="temp" type="button" size="xs" color='whiteAlpha.900' bgColor='brand.primary' _hover={{color: 'black', bgColor: 'gray.200'}} onClick={(e) => changeUnit(e, 'f', 'c')}>
                                            Convert to {units.temp === 'c' ? 'Farenheit' : 'Celsius'}
                                        </Button>
                                    </HStack>
                                    <HStack justifyContent='center' wrap='wrap'>
                                        <Text textAlign='center' fontSize={['93%', '110%']} mr={1}>Weather Condition: {forecast.data?.current?.condition?.text}</Text>
                                        <Image src={`https:${forecast.data?.current?.condition?.icon}`} width={30} height={30} alt={forecast.data?.current?.condition?.text} />
                                    </HStack>
                                    <HStack spacing={2} justifyContent='center' wrap='wrap'>
                                        <Text fontSize={['93%', '110%']}>Wind Speed: {units.wind_speed === 'mph' ? `${forecast.data?.current?.wind_mph} mph` : `${forecast.data?.current?.wind_kph} kph`}</Text>
                                        <Button id="wind_speed" type="button" size="xs" color='whiteAlpha.900' bgColor='brand.primary' _hover={{color: 'black', bgColor: 'gray.200'}} onClick={(e) => changeUnit(e, 'mph', 'kph')}>
                                            Convert to {units.wind_speed === 'mph' ? 'Kph' : 'Mph'}
                                        </Button>
                                    </HStack>
                                    <Text fontSize={['93%', '110%']}>Wind Direction: {forecast.data?.current?.wind_degree}° {forecast.data?.current?.wind_dir}</Text>
                                    <HStack spacing={2} justifyContent='center' wrap='wrap'>
                                        <Text fontSize={['93%', '110%']}>Pressure: {units.pressure === 'mb' ? `${forecast.data?.current?.pressure_mb} mb` : `${forecast.data?.current?.pressure_in} in`}</Text>
                                        <Button id="pressure" type="button" size="xs" color='whiteAlpha.900' bgColor='brand.primary' _hover={{color: 'black', bgColor: 'gray.200'}} onClick={(e) => changeUnit(e, 'mb', 'in')}>
                                            Convert to {units.pressure === 'mb' ? 'in' : 'mb'}
                                        </Button>
                                    </HStack>
                                    <HStack spacing={2} justifyContent='center' wrap='wrap'>
                                        <Text fontSize={['93%', '110%']}>Precipitation: {units.precipitation === 'mm' ? `${forecast.data?.current?.precip_mm} mm` : `${forecast.data?.current?.precip_in} in`}</Text>
                                        <Button id="precipitation" type="button" size="xs" color='whiteAlpha.900' bgColor='brand.primary' _hover={{color: 'black', bgColor: 'gray.200'}} onClick={(e) => changeUnit(e, 'mm', 'in')}>
                                            Convert to {units.precipitation === 'mm' ? 'in' : 'mm'}
                                        </Button>
                                    </HStack>
                                    <Text fontSize={['93%', '110%']}>Humidity: {forecast.data?.current?.humidity}</Text>
                                </>
                            :
                                <>
                                    <HStack spacing={2} justifyContent='center' wrap='wrap'>
                                        <Text fontSize={['93%', '110%']}>Avg. Temperature: {units.temp === 'c' ? `${forecast.data?.forecast?.forecastday[0]?.day?.avgtemp_c}°C` : `${forecast.data?.forecast?.forecastday[0]?.day?.avgtemp_f}°F`}</Text>
                                        <Button id="temp" type="button" size="xs" color='whiteAlpha.900' bgColor='brand.primary' _hover={{color: 'black', bgColor: 'gray.200'}} onClick={(e) => changeUnit(e, 'f', 'c')}>
                                            Convert to {units.temp === 'c' ? 'Farenheit' : 'Celsius'}
                                        </Button>
                                    </HStack>
                                    <HStack justifyContent='center' wrap='wrap'>
                                        <Text fontSize={['93%', '110%']} textAlign='center' mr={1}>Weather Condition: {forecast.data?.forecast?.forecastday[0]?.day?.condition?.text}</Text>
                                        <Image src={`https:${forecast.data?.forecast?.forecastday[0]?.day?.condition?.icon}`} width={30} height={30} alt={forecast.data?.forecast?.forecastday[0]?.day?.condition?.text} />
                                    </HStack>
                                    <HStack spacing={2} justifyContent='center' wrap='wrap'>
                                        <Text fontSize={['93%', '110%']}>Max. Wind Speed: {units.wind_speed === 'mph' ? `${forecast.data?.forecast?.forecastday[0]?.day?.maxwind_mph} mph` : `${forecast.data?.forecast?.forecastday[0]?.day?.maxwind_kph} kph`}</Text>
                                        <Button id="wind_speed" type="button" size="xs" color='whiteAlpha.900' bgColor='brand.primary' _hover={{color: 'black', bgColor: 'gray.200'}} onClick={(e) => changeUnit(e, 'mph', 'kph')}>
                                            Convert to {units.wind_speed === 'mph' ? 'Kph' : 'Mph'}
                                        </Button>
                                    </HStack>
                                    <HStack spacing={2} justifyContent='center' wrap='wrap'>
                                        <Text fontSize={['93%', '110%']}>Tot. Precipitation: {units.precipitation === 'mm' ? `${forecast.data?.forecast?.forecastday[0]?.day?.totalprecip_mm} mm` : `${forecast.data?.forecast?.forecastday[0]?.day?.totalprecip_in} in`}</Text>
                                        <Button id="precipitation" type="button" size="xs" color='whiteAlpha.900' bgColor='brand.primary' _hover={{color: 'black', bgColor: 'gray.200'}} onClick={(e) => changeUnit(e, 'mm', 'in')}>
                                            Convert to {units.precipitation === 'mm' ? 'in' : 'mm'}
                                        </Button>
                                    </HStack>
                                    <Text fontSize={['93%', '110%']}>Avg. Humidity: {forecast.data?.forecast?.forecastday[0]?.day?.avghumidity}</Text>
                                </>
                        }
                    </VStack>
            }
        </Box>
    )
}
