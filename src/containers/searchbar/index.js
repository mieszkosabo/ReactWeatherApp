import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, fetchWeather } from "./actions";
import { citySelector } from "../weatherDisplay/selectors";
import { Input, Button } from "./components";

export const Searchbar = () => {
  const dispatch = useDispatch();
  const city = useSelector(citySelector);
  const onTermChange = (newTerm) => dispatch(changeInput(newTerm));
  const onFormSubmit = (event, city) => {
    event.preventDefault();
    dispatch(fetchWeather(city));
  };

  //TODO: autocomplete
  return (
    <form className="searchbar" onSubmit={(event) => onFormSubmit(event, city)}>
      <Input
        placeholder="ayo lets go"
        onChange={(event) => onTermChange(event.target.value)}
      />
      <Button /> 
    </form>
  );
};
