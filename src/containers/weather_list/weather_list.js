// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/chart/chart';
import _ from 'lodash';

import './weather_list';

type Props = {
    weather: Object
};

class WeatherList extends Component<Props> {
    renderWeather(cityData) {
        const temps = _.map(
            cityData.list.map(weather => weather.main.temp),
            temp => temp - 273
        );
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td>
                    <Chart data={temps} color="red" units="°C" />
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="blue" units="%" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover weather-list">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa) </th>
                        <th>Humidity (%) </th>
                    </tr>
                </thead>
                <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
