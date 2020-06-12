import { INPUT_CHANGE, FETCH_GEO, TRY_FETCH } from "../const";

export const changeInput = (newTerm) => ({
  type: INPUT_CHANGE,
  newTerm,
});

export const tryFetch = (city) => ({
  type: TRY_FETCH,
  payload: city,
});

export const fetchGeoWeather = (lat, lon) => ({
  type: FETCH_GEO,
  payload: {lat: lat, lon: lon},
});
