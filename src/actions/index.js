import axios from 'axios';

const WEATHER_API_KEY = '60863eacd085c362630496564f490213';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
