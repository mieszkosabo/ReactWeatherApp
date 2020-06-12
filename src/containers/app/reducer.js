import { TOGGLE_THEME } from "./consts";
import { fromJS } from "immutable";

export const THEME_REDUCER = "themeReducer";
const initialThemeState = fromJS({theme: 'light'});

export const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const currTheme = state.get("theme");
      console.log("curr:",currTheme);
      return state.set("theme", currTheme === 'light' ? 'dark' : 'light');
    }
    default:
      return state;
  }
}; 