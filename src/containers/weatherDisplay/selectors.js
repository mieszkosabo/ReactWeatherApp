import { createSelector } from "reselect";
import { prop } from "rambda";


const getData = prop("weatherDisplayReducer"); //TODO: zamienić na stałe
const getCity = prop("searchbarReducer");

export const dataSelector = createSelector(getData, (state) =>
  state.get("data")
);

export const citySelector = createSelector(getCity, (state) =>
  state.get("term")
);

export const cityIDSelector = createSelector(getData, (state) =>
  state.get("cityID")
);
