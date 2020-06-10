import { ajax } from "rxjs/ajax";
import { weatherReady, fetchWeatherRejected, tenorReady, switchTenor } from "./actions";
import { FETCH_WEATHER, WEATHER_READY, TENOR_READY, DISPLAY_CACHED_TENOR } from "../const";
import { createAPICallCity } from "../../utils/request-utils";
import { mergeMap, map, catchError, takeUntil } from "rxjs/operators";
import { of, interval } from "rxjs";
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

  export const tenorSwitcher = (action$) =>
  action$.pipe(
    ofType(TENOR_READY, DISPLAY_CACHED_TENOR),
    mergeMap(() => interval(10000).pipe( //TODO: zmienić na 30s
      map((time) => switchTenor(time)),
      takeUntil(action$.pipe(
        ofType(TENOR_READY, DISPLAY_CACHED_TENOR)
      ))
    ))
  );