import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header-v4">
                {/* Header desktop */}
                <div className="container-menu-desktop">
                    {/* Topbar */}
                    <div className="top-bar">
                        <div className="content-topbar flex-sb-m h-full container">
                            <div className="left-top-bar">
                                Free shipping for standard order over $100
                        </div>
                            <div className="right-top-bar flex-w h-full">
                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    Help &amp; FAQs
                            </a>
                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    My Account
                            </a>
                                <li>
                                    <NavLink to="/login" className="flex-c-m trans-04 p-lr-25">Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register" className="flex-c-m trans-04 p-lr-25">Login</NavLink>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-menu-desktop">
                        <nav className="limiter-menu-desktop container">
                            {/* Logo desktop */}
                            <NavLink to="/" exact className="nav-link">
                                <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
                            </NavLink>
                            {/* Menu desktop */}
                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li className="active-menu">
                                        <NavLink to="/" className="nav-link">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/shop" className="nav-link">Shop</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/features" className="nav-link">Features</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog" className="nav-link">Blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" className="nav-link">About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                                    </li>

                                </ul>
                            </div>
                            {/* Icon header */}
                            <div className="wrap-icon-header flex-w flex-r-m">
                                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                    <i className="zmdi zmdi-search" />
                                </div>
                                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={2}>
                                    <i className="zmdi zmdi-shopping-cart" />
                                </div>
                                <a href="/cart" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify={0}>
                                    <i className="zmdi zmdi-favorite-outline" />
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
