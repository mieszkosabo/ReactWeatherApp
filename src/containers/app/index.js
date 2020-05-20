import React from 'react';
import { Searchbar } from '../searchbar';
import { WeatherDisplay } from "../weatherDisplay"

export const App = () => (
    <div className="App">
        <Searchbar />
        <WeatherDisplay />
    </div>
);
