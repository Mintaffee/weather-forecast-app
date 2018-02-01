// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from '../components/navigation/navigation';
import WeatherList from '../containers/weather_list/weather_list';
import SearchBar from '../containers/search_bar/search_bar';
import Login from '../containers/login';

const HomePage = () => {
    return (
        <div>
            <SearchBar />
            <WeatherList />
        </div>
    );
};
class App extends Component<{}> {
    render() {
        return (
            <Router>
                <div className="container">
                    <Navigation />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={Login} />
                </div>
            </Router>
        );
    }
}

export default App;
