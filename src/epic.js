import { combineEpics } from "redux-observable";
import {
  fetchWeatherEpic,
  fetchTenorEpic,
  tenorSwitcher,
  fetchGeoWeatherEpic,
} from "./containers/weatherDisplay/epic";
import { autocompleteEpic } from './containers/searchbar/epic'

export const rootEpic = combineEpics(
  fetchWeatherEpic,
  fetchTenorEpic,
  tenorSwitcher,
  fetchGeoWeatherEpic,
  autocompleteEpic
);
