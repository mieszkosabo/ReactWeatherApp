import { combineReducers } from "redux";
import {
  searchbarReducer,
  SEARCHBAR_REDUCER,
} from "./containers/searchbar/reducer";
import {
  weatherDisplayReducer,
  WEATHER_DISPLAY_REDUCER,
} from "./containers/weatherDisplay/reducer";
import { THEME_REDUCER, themeReducer } from "./containers/app/reducer";

export default function createReducer() {
  return combineReducers({
    [SEARCHBAR_REDUCER]: searchbarReducer,
    [WEATHER_DISPLAY_REDUCER]: weatherDisplayReducer,
    [THEME_REDUCER]: themeReducer,
  });
}
