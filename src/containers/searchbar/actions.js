import { INPUT_CHANGE, FETCH_GEO, TRY_FETCH, CANCEL_AUTOCOMPLETE, UPDATE_AUTOCOMPLETE } from "../const";

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

export const updateAutocomplete = (term) => ({
  type: UPDATE_AUTOCOMPLETE,
  payload: term,
});

export const cancelAutocomplete = () => ({
  type: CANCEL_AUTOCOMPLETE,
});