import { INPUT_CHANGE, FETCH_WEATHER, TRY_FETCH } from "../const";

export const changeInput = (newTerm) => ({
  type: INPUT_CHANGE,
  newTerm,
});

export const tryFetch = (city) => ({
  type: TRY_FETCH,
  payload: city,
});
