import { createSelector } from "reselect";

const data = state => state;

export const getData = createSelector(data, state => state.get('data'));
