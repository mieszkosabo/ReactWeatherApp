import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, fetchWeather } from "./actions";
import { citySelector } from "../weatherDisplay/selectors";

export const Searchbar = () => {
  const dispatch = useDispatch();
  const city = useSelector(citySelector);
  const onTermChange = (newTerm) => dispatch(changeInput(newTerm));
  const onFormSubmit = (event, city) => {
    event.preventDefault();
    dispatch(fetchWeather(city));
  }

  return (
    <form className="searchbar" onSubmit={(event) => onFormSubmit(event, city)}>
      <input
        placeholder="ayo lets go"
        className="input-class"
        onChange={(event) => onTermChange(event.target.value)}
      />
      <span className="submit-btn">
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </span>
    </form>
  );
};
