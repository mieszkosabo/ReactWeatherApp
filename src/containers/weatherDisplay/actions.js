import { WEATHER_READY, FETCH_WEATHER, FETCH_WEATHER_REJECTED } from "../const";

export const fetchWeather = (city) => ({
  type: FETCH_WEATHER,
  payload: city,
});

export const weatherReady = (data) => ({
  type: WEATHER_READY,
  payload: data,
});

export const fetchWeatherRejected = (error) => ({
  type: FETCH_WEATHER_REJECTED,
  payload: error,
});
