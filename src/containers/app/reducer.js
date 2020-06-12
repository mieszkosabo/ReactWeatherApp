import { TOGGLE_THEME, FETCH_STATE } from "./consts";
import { fromJS } from "immutable";
import { lightTheme, darkTheme } from "../../themes";

export const THEME_REDUCER = "themeReducer";
const initialThemeState = fromJS({theme: lightTheme});

export const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const currTheme = state.get("theme");
      console.log("curr:",currTheme);
      return state.set("theme", currTheme === lightTheme ? darkTheme : lightTheme);
    }
    default:
      return state;
  }
}; 