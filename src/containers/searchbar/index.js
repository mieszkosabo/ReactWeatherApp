import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, tryFetch, fetchGeoWeather } from "./actions";
import { citySelector } from "../weatherDisplay/selectors";
import { Input, Button } from "./components";

export const Searchbar = () => {
  const dispatch = useDispatch();
  const city = useSelector(citySelector);
  const onTermChange = (newTerm) => dispatch(changeInput(newTerm));
  const onFormSubmit = (event, city) => {
    event.preventDefault();
    dispatch(tryFetch(city));
  };
  const onGeolocation = (event) => {
    event.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        dispatch(
          fetchGeoWeather(position.coords.latitude, position.coords.longitude)
        )
      );
    } else {
      console.log("no geolocation support!");
    }
  };

  //TODO: autocomplete
  return (
    <>
      <form
        className="searchbar"
        onSubmit={(event) => onFormSubmit(event, city)}
      >
        <Input
          placeholder="ayo lets go"
          onChange={(event) => onTermChange(event.target.value)}
        />
        <Button btnName="show" />
      </form>

      <form onSubmit={(event) => onGeolocation(event)}>
        <Button btnName="show for my location" />
      </form>
    </>
  );
};
