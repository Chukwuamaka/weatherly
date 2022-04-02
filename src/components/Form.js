import { useState, useEffect } from 'react';
import { Text, Select, HStack, VStack, FormControl, FormLabel, Input, Checkbox, FormHelperText, Button } from '@chakra-ui/react';
import { BeatLoader } from 'react-spinners';
import { useDisclosure } from "@chakra-ui/react";
import { getUserLocation } from '../../services/userlocation.service';
import { getForecast } from '../../services/forecast.service';
import Dialog from './Dialog';

export default function Form({updateForecast, countryData}) {
    const [previousSearches, setPreviousSearches] = useState([]);
    const [loading, setLoading] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const continents = ["Asia", "Africa", "Europe", "North America", "South America", "Oceania"];
    const [userLocation, setUserLocation] = useState({
        loaded: false,
        coordinates: { lat: "", long: "" }
    });

    // The weather api provides only current and future weather data up to 10 days
    // getDateRange returns the min. (current date) and max. (current date + 9) date values obtainable
    const getDateRange = () => {
        // Get current date and add a leading zero if the number of digits is less than 2
        const today = new Date().getDate();
        const currentDate = ('0' + today).slice(-2);
        // Get current month and add a leading zero if the number of digits is less than 2
        const currentMonth = ('0' + (new Date().getMonth() + 1)).slice(-2);
        // Get current year
        const currentYear = new Date().getFullYear();
        // Get time epoch of max. date
        const future = new Date().setDate(today + 9);
        // Get max. date and month and add a leading zero if the number of digits is less than 2
        const futureDate = ('0' + new Date(future).getDate()).slice(-2);
        const futureMonth = ('0' + (new Date(future).getMonth() + 1)).slice(-2);
        // Get max. year
        const futureYear = new Date(future).getFullYear();

        return {
            min: `${currentYear}-${currentMonth}-${currentDate}`,
            max: `${futureYear}-${futureMonth}-${futureDate}`
        }
    }

    // Form default values
    const [formData, setFormData] = useState({
        continent: 'Africa',
        country: 'Nigeria',
        city: 'Ikeja',
        date: getDateRange().min,
        remember: false,
    });

    const handleSelect = (e) => {
        const { name, value } = e.target;
        if (name === 'remember'){
            return setFormData({...formData, [name]: !formData.remember});
        }
        // Open dialog with previous searches
        else if (name === 'usePrev' && value === 'yes') {
            onOpen();
            return;
        }
        return setFormData({...formData, [name]: value});
    }

    // Populate the form with data from a selected previous search and close the dialog
    const usePreviousSearch = (args) => {
        setFormData({...formData, ...args});
        onClose();
    }

    useEffect(() => {
        let isMounted = true;   
        if (isMounted && typeof window !== 'undefined') {
            // If 'previousSearches' key exists in localStorage, set its value to the store variable
            const store = localStorage.previousSearches && JSON.parse(localStorage.previousSearches);
            // If the 'previousSearches' key does not exists, initiate it and set it to an empty array
            localStorage.previousSearches = !store ? JSON.stringify([]) : JSON.stringify(store);
            store && setPreviousSearches(store);
        }

        return () => {
            isMounted = false;
        }
    }, []);

    // Get the longitude and latitude of user's current location
    useEffect(() => {
        if (!("geolocation" in navigator)) {
            console.log("Geolocation not supported");
            setUserLocation({ loaded: false })
        }
        else {
            navigator.geolocation.getCurrentPosition(
                location => setUserLocation({
                    loaded: true,
                    coordinates: {
                        lat: location.coords.latitude,
                        long: location.coords.longitude
                    }
                }),
                error => {
                    console.log(error);
                    setUserLocation({ loaded: false })
                }
            )
        }
    }, [])

    // Reverse geocoding to get the user's actual location
    useEffect(() => {
        if (userLocation.loaded) {
            getUserLocation(userLocation.coordinates.lat, userLocation.coordinates.long)
            .then(response => response.json())
            .then(info => {
                // Set form's default location values to user's current location
                const { continent, country, county: city } = info.results[0].components;
                setFormData(prevData => ({...prevData, continent, country, city}))
            }).catch(error => console.log(error));
        }
    }, [userLocation])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const today = new Date().getDate();
        // Get the difference between the current date and the date the user selected
        const difference = new Date().setDate(new Date(formData.date).getDate() - today);
        const days = formData.date === getDateRange().min ? 1 : new Date(difference).getDate() + 1;

        const success = (data) => {
            if (data.error) {
                return updateForecast({ status: 'error', data: `Oops! ${data.error.message}`})
            }
            else {
                const { remember, date, ...choices } = formData;
                // Save search to localStorage if user checked the checkbox
                remember && localStorage.setItem('previousSearches', JSON.stringify([...previousSearches, choices]))
                const filter = data.forecast?.forecastday.filter(day => day.date === formData.date);
                data.forecast.forecastday = filter;
                data.today = data.forecast?.forecastday[0]?.date === getDateRange().min ? true : false;
                return updateForecast({status: 'success', data});
            }
        };

        getForecast(`${formData.city}, ${formData.country}`, days)
        .then(res => res.json())
        .then(success)
        .catch(err => updateForecast({
            status: 'error',
            data: "Oops! We couldn't fetch your data at the moment. Don't panic as the issue could be from our end. You can try a few more times and if the problem persists, please try again a little later."
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <Text textAlign='center' color='gray.500' fontSize={['95%', null]} px={4} pb={6}>Kindly fill out the form below so we can retrieve your data</Text>
            <VStack spacing={2} fontSize={18} maxW='85%' margin='auto'>
                {
                    // Display Select element only if user has previous searches saved
                    previousSearches.length !== 0 && 
                    <>
                        <FormControl>
                            <Select name='usePrev' placeholder='Would you like to use a previously saved search?' color='black' borderColor='brand.primary' onChange={handleSelect}>
                                <option value='yes'>Yes, please</option>
                                <option value='false'>No, maybe later</option>
                            </Select>
                        </FormControl>
                        <Dialog isOpen={isOpen} onClose={onClose} previousSearches={previousSearches} selectSearch={usePreviousSearch} />
                    </>
                }
                <HStack spacing={[0, null, 3]} w='100%' flexWrap={['wrap', null, 'nowrap']}>
                    <FormControl isRequired mb={[2, 2, 0]}>
                        <FormLabel htmlFor='continent' color='blackAlpha.700' mb={1} fontSize={['86%', null]}>Continent</FormLabel>
                        <Select id='continent' name='continent' value={formData.continent} placeholder='Select Continent' color='black' borderColor='brand.primary' onChange={handleSelect}>
                            {
                                continents.map(continent => <option key={continent} value={continent}>{continent}</option>)
                            }
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='country' color='blackAlpha.700' mb={1} fontSize={['86%', null]}>Country</FormLabel>
                        <Select id='country' name='country' value={formData.country} placeholder='Select Country' color='black' borderColor='brand.primary' onChange={handleSelect}>
                            {
                                // Display countries that match the selected continent
                                countryData.filter(item => item.continent === formData.continent).map((country, index) => (
                                    <option key={country.country+index} value={country.country}>{country.country}</option>
                                ))
                            }
                        </Select>
                    </FormControl>
                </HStack>
                <HStack spacing={[0, null, 3]} w='100%' flexWrap={['wrap', null, 'nowrap']}>
                    <FormControl isRequired mb={[2, 2, 0]}>
                        <FormLabel htmlFor='city' color='blackAlpha.700' mb={1} fontSize={['86%', null]}>City</FormLabel>
                        <Select id='city' name='city' value={formData.city} placeholder='Select City' color='black' borderColor='brand.primary' onChange={handleSelect}>
                            {
                                // Display cities that match the selected country
                                countryData.filter(item => item.country === formData.country)[0].cities.map((city, index) => (
                                    <option key={city+index} value={city}>{city}</option>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='date' color='blackAlpha.700' mb={1} fontSize={['86%', null]}>Date</FormLabel>
                        <Input id='date' type='date' name='date' value={formData.date} min={getDateRange().min} max={getDateRange().max} placeholder='Select Date' borderColor='brand.primary' onChange={handleSelect} />
                    </FormControl>
                </HStack>
                <FormControl textAlign='center' color='blackAlpha.700'>
                    <Checkbox name='remember' size='sm' mt={5} mb={1} onChange={handleSelect}>Remember this search</Checkbox>
                </FormControl>
                <Button type='submit' isLoading={loading} loadingText='Fetching Data' bgColor='brand.primary' color='white' _hover={{bgColor: 'brand.primary'}} spinner={<BeatLoader size={8} color='white' />} spinnerPlacement='end'>
                    Check Forecast
                </Button>
            </VStack>
        </form>
    )
}
