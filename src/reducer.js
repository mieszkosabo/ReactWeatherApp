import { combineReducers } from 'redux';
import { searchbarReducer } from './containers/searchbar/reducer';

export default function createReducer() {
  return combineReducers({
      ['searchbarReducer']: searchbarReducer
  });
}