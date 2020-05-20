import React from "react";
import { Searchbar } from "../searchbar";
import { WeatherDisplay } from "../weatherDisplay";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../themes";

export const App = () => (
  <ThemeProvider theme={lightTheme}>
    <div className="App">
      <Searchbar />
      <WeatherDisplay />
    </div>
  </ThemeProvider>
);
