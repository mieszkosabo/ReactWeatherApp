import { ajax } from "rxjs/ajax";
import { weatherReady, fetchWeatherRejected } from "./actions";
import { FETCH_WEATHER } from "../const";
import { API_URL, API_KEY } from "../../APIconfig";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ofType } from "redux-observable";

export const fetchWeatherEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_WEATHER),
    mergeMap((action) =>
      ajax
        .getJSON(
          `${API_URL}${action.payload
            .trim()
            .replace(/ /g, "+")}&appid=${API_KEY}`
        )
        .pipe(
          map((response) => weatherReady(response)),
          catchError((error) => of(fetchWeatherRejected(error)))
        )
    )
  );
