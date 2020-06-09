import { WEATHER_READY, FETCH_WEATHER, FETCH_WEATHER_REJECTED, DISPLAY_CACHED } from "../const";

export const fetchWeather = (city_id) => ({
  type: FETCH_WEATHER,
  payload: city_id,
});

export const weatherReady = (data) => ({
  type: WEATHER_READY,
  payload: data,
});

export const fetchWeatherRejected = (error) => ({
  type: FETCH_WEATHER_REJECTED,
  payload: error,
});

export const displayCached = (cached) => ({
  type: DISPLAY_CACHED,
  payload: cached,
})