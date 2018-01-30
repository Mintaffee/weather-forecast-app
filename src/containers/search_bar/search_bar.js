import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions/index';

import './search_bar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <div className="search-bar">
                <form
                    onSubmit={this.onSubmit.bind(this)}
                    className="input-group "
                >
                    <input
                        placeholder="Get your a five-day forecast in your favorite cities"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange.bind(this)}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-search">
                            Search
                        </button>
                    </span>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
