import { TRY_FETCH } from '../const';
import { cityToID } from '../../utils/request-utils';
import { fetchWeather, fetchWeatherRejected, displayCached } from './actions';
import { cachedSelector } from './selectors';

//TODO: może coś bardziej fancy niż returnowanie undefined
// ew zmienić nazwę heh
const isCachedWeather = (store, id) => {
  const state = store.getState();
  const cached = cachedSelector(state);
  console.log("cached:", cached);
  return cached.find((city) => city.cityID == id);
}

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
    if (cachedWeather !== undefined) {
      store.dispatch(displayCached(cachedWeather));
    } else {
      store.dispatch(fetchWeather(id));
    }
  } catch (error) {
    store.dispatch(fetchWeatherRejected(error));
  }

  return result;
}