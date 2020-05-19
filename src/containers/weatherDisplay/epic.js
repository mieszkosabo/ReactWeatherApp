import { ajax } from "rxjs/ajax";
import { weatherReady } from "./actions";
import { FETCH_WEATHER } from "../const";
import { API_URL, API_KEY } from "../../APIconfig";
import { mergeMap, map } from "rxjs/operators";
import { ofType } from "redux-observable";

export const fetchWeatherEpic = action$ =>
  action$.pipe(
    ofType(FETCH_WEATHER),
    mergeMap(action =>
      ajax
        .getJSON(`${API_URL}${action.payload}&appid=${API_KEY}`)
        .pipe(map(response => weatherReady(response)))
    )
  );
