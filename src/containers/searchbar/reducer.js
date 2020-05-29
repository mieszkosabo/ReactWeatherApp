import { EMPTY_TERM, INPUT_CHANGE } from "../const";
import { fromJS } from "immutable";

export const SEARCHBAR_REDUCER = 'searchbarReducer';

const initialSearchbarState = fromJS({ term: EMPTY_TERM });

export const searchbarReducer = (state = initialSearchbarState, action) => {
  switch (action.type) {
    case INPUT_CHANGE: {
      const { newTerm } = action;
      return state.setIn(["term"], newTerm);
    }
    default:
      return state;
  }
};
