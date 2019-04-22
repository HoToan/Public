import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
class menu extends Component {
    render() {
        return (
            <div className="sidebar" data-color="white" data-active-color="danger">
                <div className="logo">
                    <NavLink to="/admin/" className="simple-text logo-mini">
                        <div className="logo-image-small">
                            <img src="../assets/img/logo-small.png" />
                        </div>
                    </NavLink>

                    <NavLink to="/admin/" className="simple-text logo-normal">
                        Creative Tim
                    </NavLink>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="active ">
                            <NavLink to="/admin/">
                                <i className="nc-icon nc-bank" />
                                <p>Dashboard</p>
                            </NavLink >
                        </li>
                        <li>
                            <NavLink to="/notifications/">
                                <i className="nc-icon nc-bell-55" />
                                <p>Notifications</p>
                            </NavLink >
                        </li>
                        <li>
                            <NavLink to="/user/">
                                <i className="nc-icon nc-single-02" />
                                <p>User Profile</p>
                            </NavLink >
                        </li>
                        <li>
                            <NavLink to="/tables/">
                                <i className="nc-icon nc-tile-56" />
                                <p>Table List</p>
                            </NavLink >
                        </li>
                        <li>
                            <NavLink to="/typography/">
                                <i className="nc-icon nc-caps-small" />
                                <p>Typography</p>
                            </NavLink >
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default menu;
