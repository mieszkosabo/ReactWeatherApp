import React from "react";
import { useSelector } from "react-redux";
import { MyLoader } from "./components/loader";
import { DayCard } from "./components/dayCard";
import { dataSelector, tenorSelector } from "./selectors";
import { forecastSelector } from "../app/selectors";
import { EMPTY, FETCHING, FETCHING_ERROR } from "../const";

export const WeatherDisplay = () => {
  const data = useSelector(dataSelector);
  const gif = useSelector(tenorSelector);
  const isDaily = useSelector(forecastSelector);

  const dayOrHourCard = (data, isDaily) =>
    isDaily ? (
      <DayCard data={data} days={data.daily} gif={gif} />
    ) : (
      <DayCard data={data} hours={data.hourly} gif={gif} />
    );

  if (
    data === EMPTY ||
    data === FETCHING ||
    data == FETCHING_ERROR
  ) {
    return (
      <>
        <MyLoader />
      </>
    );
  } else {
    return (
      <>
        <MyLoader />
        {dayOrHourCard(data, isDaily)}
      </>
    );
  }
};
