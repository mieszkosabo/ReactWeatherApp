import { ofType } from "redux-observable";
import { map } from 'rxjs/operators';
import { INPUT_CHANGE } from "../const";
import {updateAutocomplete, cancelAutocomplete} from './actions';

export const autocompleteEpic = (action$) =>
  action$.pipe(
    ofType(INPUT_CHANGE),
    map(action => 
      action.newTerm.length > 2 ? updateAutocomplete(action.newTerm) : cancelAutocomplete()
    )
  );