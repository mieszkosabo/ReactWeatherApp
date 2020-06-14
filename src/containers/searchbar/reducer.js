import {
  EMPTY_TERM,
  INPUT_CHANGE,
  UPDATE_AUTOCOMPLETE,
  CANCEL_AUTOCOMPLETE,
} from "../const";
import { fromJS, List } from "immutable";
import { citiesList } from "../../assets";
import { uniqWith } from "rambda";

export const SEARCHBAR_REDUCER = "searchbarReducer";

const initialSearchbarState = fromJS({
  term: EMPTY_TERM,
  citiesForAutocomplete: List(),
  displayAutocomplete: false,
});

const sameName = (c1, c2) => c1.name === c2.name;
const uniqName = uniqWith(sameName);

export const searchbarReducer = (state = initialSearchbarState, action) => {
  switch (action.type) {
    case INPUT_CHANGE: {
      const { newTerm } = action;
      return state.setIn(["term"], newTerm);
    }
    case UPDATE_AUTOCOMPLETE: {
      const newCities = citiesList.filter((city) =>
        city.name.toUpperCase().startsWith(action.payload.toUpperCase())
      );
      return state
        .set("displayAutocomplete", true)
        .set("citiesForAutocomplete", List(uniqName(newCities)));
    }
    case CANCEL_AUTOCOMPLETE: {
      return state.set("displayAutocomplete", false);
    }
    default:
      return state;
  }
};
