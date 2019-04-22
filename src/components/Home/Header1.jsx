import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Header1 extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src="images/icons/logo-02.png" alt="IMG-LOGO" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">

                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/shop" className="nav-link">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blog" className="nav-link">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admin/" className="nav-link">Admin</NavLink>
                            </li>

                            <li className="nav-item cart">
                                <NavLink
                                    to="/features"
                                    className="nav-link">
                                    <span className="icon icon-shopping_cart" />
                                    <span className="bag d-flex justify-content-center align-items-center">
                                        <small>1</small>
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header1;
