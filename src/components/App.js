// @flow

import React, { Component } from 'react';
import './App.css';
import SearchBar from '../containers/search_bar/search_bar';
import WeatherList from '../containers/weather_list/weather_list';
class App extends Component<{}> {
    render() {
        return (
            <div className="container">
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}

export default App;
