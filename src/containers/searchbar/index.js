import React from "react";
import Autocomplete from "react-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, tryFetch, fetchGeoWeather } from "./actions";
import {
  citySelector,
  autocompleteSelector,
  shouldRenderAutocompleteSelector,
} from "../weatherDisplay/selectors";
import { Input, Button } from "./components";

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
        <Autocomplete
          shouldItemRender={() => shouldRender}
          getItemValue={(item) => item.name}
          items={cities.toJS()}
          renderItem={(item, isHighlighted) => (
            <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
              {item.name}
            </div>
          )}
          value={city}
          onChange={(event) => onTermChange(event.target.value)}
          onSelect={(val) => onTermChange(val)}
        />
        <Button btnName="show" />
      </form>

      <form onSubmit={(event) => onGeolocation(event)}>
        <Button btnName="show for my location" />
      </form>
    </>
  );
};
