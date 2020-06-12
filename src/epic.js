import { combineEpics } from "redux-observable";
import { fetchWeatherEpic, fetchTenorEpic, tenorSwitcher, fetchGeoWeatherEpic } from "./containers/weatherDisplay/epic";

export const rootEpic = combineEpics(fetchWeatherEpic, fetchTenorEpic, tenorSwitcher, fetchGeoWeatherEpic);
