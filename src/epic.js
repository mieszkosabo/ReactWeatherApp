import { combineEpics } from "redux-observable";
import { fetchWeatherEpic, fetchTenorEpic, tenorSwitcher } from "./containers/weatherDisplay/epic";

export const rootEpic = combineEpics(fetchWeatherEpic, fetchTenorEpic, tenorSwitcher);
