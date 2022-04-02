import { getRequest } from "./default.service";

export const getForecast = (city, days) => {
    return getRequest(`${process.env.NEXT_PUBLIC_WEATHER_API_BASE_URL}&q=${city}&days=${days}`);
}