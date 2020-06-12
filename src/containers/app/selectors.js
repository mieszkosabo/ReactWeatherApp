import { createSelector } from "reselect";
import { prop } from "rambda";
import { THEME_REDUCER } from './reducer';

const getTheme = prop(THEME_REDUCER);

export const themeSelector = createSelector(getTheme, (state) => 
  state.get("theme")
);