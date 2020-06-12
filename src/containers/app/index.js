import React from "react";
import { Searchbar } from "../searchbar";
import { WeatherDisplay } from "../weatherDisplay";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../themes";
import { GlobalStyle } from "../../globalStyles";
import { Button } from "../searchbar/components";
import { useDispatch, useSelector } from "react-redux";
import { toggleAction, fetchState } from './actions';
import { themeSelector } from "./selectors";
import { ButtonWrapper } from "../searchbar/components/button/ButtonWrapper";

export const App = () => {
  const dispatch = useDispatch();
  const toggleTheme = () => dispatch(toggleAction());
  const theme = useSelector(themeSelector);
  console.log(theme);
  return (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <ButtonWrapper onClick={() => toggleTheme()}>toggle theme </ButtonWrapper>
      <Searchbar />
      <WeatherDisplay /> 
    </>
  </ThemeProvider>
)};
