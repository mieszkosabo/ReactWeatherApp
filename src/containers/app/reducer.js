import { TOGGLE_THEME, SWITCH_FORECAST } from "./consts";
import { fromJS } from "immutable";

export const THEME_REDUCER = "themeReducer";
const initialThemeState = fromJS({theme: 'light', dailyForecast: true});

export const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const currTheme = state.get("theme");
      console.log("curr:",currTheme);
      return state.set("theme", currTheme === 'light' ? 'dark' : 'light');
    }
    case SWITCH_FORECAST: {
      const currDaily = state.get('dailyForecast');
      return state.set("dailyForecast", !currDaily);
    }
    default:
      return state;
  }
}; 