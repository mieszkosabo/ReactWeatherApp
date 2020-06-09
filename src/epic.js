import { combineEpics } from "redux-observable";
import { fetchWeatherEpic, fetchTenorEpic } from "./containers/weatherDisplay/epic";

export const rootEpic = combineEpics(fetchWeatherEpic, fetchTenorEpic);
