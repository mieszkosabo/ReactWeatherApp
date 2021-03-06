import {
  DISPLAY_CACHED,
  FETCH_WEATHER,
  FETCH_WEATHER_REJECTED,
  TENOR_READY,
  WEATHER_READY,
  SWITCH_TENOR,
  DISPLAY_CACHED_TENOR,
  FETCH_TENOR_REJECTED,
} from "../const";

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

export const fetchTenorRejected = (error) => ({
  type: FETCH_TENOR_REJECTED,
  payload: error,
});

export const displayCached = (cached) => ({
  type: DISPLAY_CACHED,
  payload: cached,
});

export const displayCachedTenor = (cached) => ({
  type: DISPLAY_CACHED_TENOR,
  payload: cached,
});

export const tenorReady = (res) => ({
  type: TENOR_READY,
  payload: res,
});

export const switchTenor = (res) => ({
  type: SWITCH_TENOR,
  payload: res,
});
