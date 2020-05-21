import React from "react";
import { Searchbar } from "../searchbar";
import { WeatherDisplay } from "../weatherDisplay";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../themes";
import { GlobalStyle } from "../../globalStyles";

export const App = () => (
  <ThemeProvider theme={lightTheme}>
    <>
      <GlobalStyle />
      <Searchbar />
      <WeatherDisplay />
    </>
  </ThemeProvider>
);
