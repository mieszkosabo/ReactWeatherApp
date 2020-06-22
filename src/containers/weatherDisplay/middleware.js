import { TRY_FETCH } from "../const";
import { cityToID } from "../../utils/request-utils";
import {
  fetchWeather,
  fetchWeatherRejected,
  displayCached,
  displayCachedTenor,
} from "./actions";
import { cachedWeatherSelector, cachedTenorSelector } from "./selectors";
import { isNil } from 'rambda';

const isCachedWeather = (store, id) => {
  const state = store.getState();
  const cached = cachedWeatherSelector(state);
  return cached.find((city) => city.cityID == id);
};

const isCachedTenor = (store, id) => {
  const state = store.getState();
  const cached = cachedTenorSelector(state);
  return cached.find((x) => x.cityID == id);
};

// Here we listen for TRY_FETCH actions and decide
// whether to try to fetch data from API or diplay
// cached data or even dispach error while fetching
export const verifyUserInput = (store) => (next) => (action) => {
  if (action.type !== TRY_FETCH) {
    return next(action);
  }
  const result = next(action);
  try {
    const id = cityToID(action.payload);
    const cachedWeather = isCachedWeather(store, id);
    const cachedTenor = isCachedTenor(store, id);
    if (isNil(cachedWeather) || isNil(cachedTenor)) {
      store.dispatch(fetchWeather(id));
    } else {
      store.dispatch(displayCached(cachedWeather));
      store.dispatch(displayCachedTenor(cachedTenor));
    }
  } catch (error) {
    store.dispatch(fetchWeatherRejected(error));
  }

  return result;
};
