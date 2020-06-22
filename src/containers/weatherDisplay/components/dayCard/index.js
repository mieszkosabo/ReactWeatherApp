import React from "react";
import { DayCardWrapper } from "./DayCardWrapper";
import { Table } from "../table";
import { CityNameHeader } from "../cityNameHeader";
import { citiesList } from "../../../../assets";
import { TenorGif } from "../TenorGif";
import { defaultTo } from "rambda";

const defaultName = defaultTo({ name: "your location" });
const cityNameByID = (id) => {
  return defaultName(
    citiesList.find((city) => {
      return city.id === id;
    })
  ).name;
};

export const DayCard = ({ days, gif }) => (
  <DayCardWrapper>
    <TenorGif url={gif} />
    <CityNameHeader
      city={cityNameByID(days.cityID)}
      niceStatus={days.niceStatus.daily}
    />
    <Table days={days.daily} />
  </DayCardWrapper>
);
