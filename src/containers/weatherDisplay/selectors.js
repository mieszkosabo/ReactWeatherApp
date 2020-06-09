import { createSelector } from "reselect";
import { prop } from "rambda";
import { WEATHER_DISPLAY_REDUCER } from './reducer';
import { SEARCHBAR_REDUCER } from '../searchbar/reducer';


const getData = prop(WEATHER_DISPLAY_REDUCER);
const getCity = prop(SEARCHBAR_REDUCER);

export const dataSelector = createSelector(getData, (state) =>
  state.get("data")
);

export const citySelector = createSelector(getCity, (state) =>
  state.get("term")
);

export const cityIDSelector = createSelector(getData, (state) =>
  state.get("cityID")
);

export const cachedSelector = createSelector(getData, (state) =>
  state.get("cached")
);

export const tenorSelector = createSelector(getData, (state) =>
  state.get("tenor")
);
