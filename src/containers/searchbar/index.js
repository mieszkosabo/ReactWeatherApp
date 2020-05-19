import React from "react";
import { useDispatch } from "react-redux";
import { changeInput, fetchWeather } from "./actions";

export const Searchbar = () => {
  const dispatch = useDispatch();
  const onTermChange = (newTerm) => dispatch(changeInput(newTerm));
  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchWeather());
  }

  return (
    <form className="searchbar" onSubmit={(event) => onFormSubmit(event)}>
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
