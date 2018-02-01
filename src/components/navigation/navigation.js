// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component<{}> {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink to="/">Home</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
