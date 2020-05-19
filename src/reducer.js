import { combineReducers } from 'redux';
import { searchbarReducer } from './containers/searchbar/reducer';
import { weatherDisplayReducer } from './containers/weatherDisplay/reducer';

export default function createReducer() {
  return combineReducers({
      ['searchbarReducer']: searchbarReducer,
      ['weatherDisplayReducer']: weatherDisplayReducer //TODO: zamienić na const
  });
}