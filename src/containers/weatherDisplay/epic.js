import { ajax } from "rxjs/ajax";
import { weatherReady, fetchWeatherRejected, tenorReady } from "./actions";
import { FETCH_WEATHER, WEATHER_READY } from "../const";
import { createAPICallCity } from "../../utils/request-utils";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ofType } from "redux-observable";
import { createTenorCall, mostCommonDescription } from "../../utils/tenorUtils";


//TODO: dodać request cancellation, gdy przyjdzie kolejne żądanie
export const fetchWeatherEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_WEATHER),
    mergeMap((action) =>
      ajax
        .getJSON(
          createAPICallCity(action.payload, 'current')
        )
        .pipe(
          map((response) => weatherReady(response)),
          catchError((error) => of(fetchWeatherRejected(error)))
        )
    )
  );

  export const fetchTenorEpic = (action$) =>
  action$.pipe(
    ofType(WEATHER_READY),
    mergeMap((action) =>
      ajax
        .getJSON(
          createTenorCall(mostCommonDescription(action.payload.daily))
        )
        .pipe(
          map((response) => tenorReady(response)),
          catchError((error) => of(fetchWeatherRejected(error))) //TODO: zamienić na tenor coś
        )
    )
  );