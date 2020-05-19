import { WEATHER_READY, FETCH_WEATHER } from "../const";

export const fetchWeather = city => ({
  type: FETCH_WEATHER,
  payload: city
});

export const weatherReady = data => ({
  type: WEATHER_READY,
  payload: data
});
