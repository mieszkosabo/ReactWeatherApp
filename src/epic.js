import { combineEpics } from "redux-observable";
import { fetchWeatherEpic } from "./containers/weatherDisplay/epic";

export const rootEpic = combineEpics(fetchWeatherEpic);
