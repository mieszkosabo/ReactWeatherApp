import React from "react";
import Autocomplete from "react-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, tryFetch, fetchGeoWeather } from "./actions";
import {
  citySelector,
  autocompleteSelector,
  shouldRenderAutocompleteSelector,
} from "../weatherDisplay/selectors";
import { Button } from "./components";
import { useTheme } from "styled-components";

export const Searchbar = () => {
  const dispatch = useDispatch();
  const city = useSelector(citySelector);
  const cities = useSelector(autocompleteSelector);
  const shouldRender = useSelector(shouldRenderAutocompleteSelector);
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
  const theme = useTheme();
  return (
    <>
      <form
        className="searchbar"
        onSubmit={(event) => onFormSubmit(event, city)}
      >
        <Autocomplete
          shouldItemRender={() => shouldRender}
          getItemValue={(item) => item.name}
          items={cities.toJS()}
          renderItem={(item, isHighlighted) => (
            <div style={{ background: isHighlighted ? theme.colors.highlitedText : theme.colors.notHighlitedText }}>
              {item.name}
            </div>
          )}
          value={city}
          onChange={(event) => onTermChange(event.target.value)}
          onSelect={(val) => onTermChange(val)}
          inputProps={{
            style: {
              color: `${theme.colors.text}`,
              width: "80%",
              background: `${theme.colors.inputBackground}`,
              fontSize: "2rem",
              border: "0",
              borderBottom: `2px solid dimgray`,
              marginBottom: "25px",
            },
            placeholder: "select city",
          }}
        />
        <Button btnName="show" />
      </form>

      <form onSubmit={(event) => onGeolocation(event)}>
        <Button btnName="show for my location" />
      </form>
    </>
  );
};
