import React from "react";
import { DayCardWrapper } from "./DayCardWrapper";
import { Table } from "../table";
import { HourTable } from "../hourTable";
import { CityNameHeader } from "../cityNameHeader";
import { citiesList } from "../../../../assets";
import { TenorGif } from "../TenorGif";
import { defaultTo, isNil } from "rambda";

const defaultName = defaultTo({ name: "your location" });
const cityNameByID = (id) => {
  return defaultName(
    citiesList.find((city) => {
      return city.id === id;
    })
  ).name;
};

const dayOrHourTable = (days, hours) =>
  isNil(days) ? <HourTable hours={hours} /> : <Table days={days} />;

export const DayCard = ({ data, days, hours, gif }) => (
  <DayCardWrapper>
    <TenorGif url={gif} />
    <CityNameHeader
      city={cityNameByID(data.cityID)}
      niceStatus={data.niceStatus.daily}
    />
    {dayOrHourTable(days, hours)}
  </DayCardWrapper>
);
