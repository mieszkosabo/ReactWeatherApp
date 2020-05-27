import { ajax } from "rxjs/ajax";
import { weatherReady, fetchWeatherRejected } from "./actions";
import { FETCH_WEATHER } from "../const";
import { createAPICallCity } from "../../utils/request-utils";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ofType } from "redux-observable";

export const fetchWeatherEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_WEATHER),
    mergeMap((action) =>
      ajax
        .getJSON(
          createAPICallCity(action.payload, 'current')
          // `${API_URL_5_3}${action.payload
          //   .trim()
          //   .replace(/ /g, "+")}&cnt=7&appid=${API_KEY}`
        )
        .pipe(
          map((response) => weatherReady(response)),
          catchError((error) => of(fetchWeatherRejected(error)))
        )
    )
  );
