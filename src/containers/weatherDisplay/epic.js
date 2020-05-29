import { ajax } from "rxjs/ajax";
import { weatherReady, fetchWeatherRejected } from "./actions";
import { FETCH_WEATHER } from "../const";
import { createAPICallCity } from "../../utils/request-utils";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ofType } from "redux-observable";


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

  //TODO: dodać epica offType WEATHER_READY
  // który robi ajaxa z tenorem odpowiednim.