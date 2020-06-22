import { ajax } from "rxjs/ajax";
import {
  weatherReady,
  fetchWeatherRejected,
  tenorReady,
  switchTenor,
} from "./actions";
import {
  FETCH_WEATHER,
  WEATHER_READY,
  TENOR_READY,
  DISPLAY_CACHED_TENOR,
  FETCH_GEO,
} from "../const";
import {
  createAPICallCity,
  createAPICallCoordinates,
} from "../../utils/request-utils";
import { mergeMap, map, catchError, takeUntil } from "rxjs/operators";
import { of, interval } from "rxjs";
import { ofType } from "redux-observable";
import { createTenorCall, mostCommonDescription } from "../../utils/tenorUtils";

export const fetchWeatherEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_WEATHER),
    mergeMap((action) =>
      ajax.getJSON(createAPICallCity(action.payload, "current")).pipe(
        map((response) => weatherReady(response)),
        catchError((error) => of(fetchWeatherRejected(error))),
        takeUntil(action$.pipe(ofType(FETCH_WEATHER)))
      )
    )
  );

export const fetchGeoWeatherEpic = (action$) => {
  return action$.pipe(
    ofType(FETCH_GEO),
    mergeMap((action) =>
      ajax
        .getJSON(
          createAPICallCoordinates(
            action.payload.lat,
            action.payload.lon,
            "current"
          )
        )
        .pipe(
          map((response) => weatherReady(response)),
          catchError((error) => of(fetchWeatherRejected(error))),
          takeUntil(action$.pipe(ofType(FETCH_GEO)))
        )
    )
  );
};

export const fetchTenorEpic = (action$) =>
  action$.pipe(
    ofType(WEATHER_READY),
    mergeMap((action) =>
      ajax
        .getJSON(createTenorCall(mostCommonDescription(action.payload.daily)))
        .pipe(
          map((response) => tenorReady(response)),
          catchError((error) => of(fetchWeatherRejected(error))),
          takeUntil(action$.pipe(ofType(WEATHER_READY)))
        )
    )
  );

export const tenorSwitcher = (action$) =>
  action$.pipe(
    ofType(TENOR_READY, DISPLAY_CACHED_TENOR),
    mergeMap(() =>
      interval(30000).pipe(
        map((time) => switchTenor(time)),
        takeUntil(action$.pipe(ofType(TENOR_READY, DISPLAY_CACHED_TENOR)))
      )
    )
  );
