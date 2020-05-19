import { EMPTY_TERM, INPUT_CHANGE } from './const';
import { FromJS } from 'immutable';

const initialSearchbarState = FromJS({ term: EMPTY_TERM});

const searchbarReducer = (state = initialSearchbarState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
  }
}