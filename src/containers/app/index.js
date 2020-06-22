import React from "react";
import { Searchbar } from "../searchbar";
import { WeatherDisplay } from "../weatherDisplay";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../themes";
import { GlobalStyle } from "../../globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleAction, switchForecast } from './actions';
import { themeSelector } from "./selectors";
import { ButtonWrapper } from "../searchbar/components/button/ButtonWrapper";

export const App = () => {
  const dispatch = useDispatch();
  const toggleTheme = () => dispatch(toggleAction());
  const toggleForecast = () => dispatch(switchForecast());
  const theme = useSelector(themeSelector);
  console.log(theme);
  return (
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
      <GlobalStyle />
      <ButtonWrapper onClick={() => toggleTheme()}>toggle theme </ButtonWrapper>
      <ButtonWrapper onClick={() => toggleForecast()}> switch forecast display </ButtonWrapper>
      <Searchbar />
      <WeatherDisplay /> 
    </>
  </ThemeProvider>
)};
