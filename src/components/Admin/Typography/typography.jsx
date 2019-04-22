import React, { Component } from 'react';
import Menu from '../Admin/Menu';

class typography extends Component {
    render() {
        return (
            <div className="wrapper ">
                 <Menu/>
                <div className="main-panel">
                    {/* Navbar */}
                    <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                        <div className="container-fluid">
                            <div className="navbar-wrapper">
                                <div className="navbar-toggle">
                                    <button type="button" className="navbar-toggler">
                                        <span className="navbar-toggler-bar bar1" />
                                        <span className="navbar-toggler-bar bar2" />
                                        <span className="navbar-toggler-bar bar3" />
                                    </button>
                                </div>
                                <a className="navbar-brand" href="#pablo">Paper Dashboard 2</a>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar navbar-kebab" />
                                <span className="navbar-toggler-bar navbar-kebab" />
                                <span className="navbar-toggler-bar navbar-kebab" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                <form>
                                    <div className="input-group no-border">
                                        <input type="text" defaultValue className="form-control" placeholder="Search..." />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <i className="nc-icon nc-zoom-split" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link btn-magnify" href="#pablo">
                                            <i className="nc-icon nc-layout-11" />
                                            <p>
                                                <span className="d-lg-none d-md-block">Stats</span>
                                            </p>
                                        </a>
                                    </li>
                                    <li className="nav-item btn-rotate dropdown">
                                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="nc-icon nc-bell-55" />
                                            <p>
                                                <span className="d-lg-none d-md-block">Some Actions</span>
                                            </p>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn-rotate" href="#pablo">
                                            <i className="nc-icon nc-settings-gear-65" />
                                            <p>
                                                <span className="d-lg-none d-md-block">Account</span>
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* End Navbar */}
                    {/* <div class="panel-header panel-header-sm">
      
      
    </div> */}
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="title">Paper Table Heading</h5>
                                        <p className="category">Created using Montserrat Font Family</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="typography-line">
                                            <h1>
                                                <span>Header 1</span>The Life of Paper Dashboard </h1>
                                        </div>
                                        <div className="typography-line">
                                            <h2>
                                                <span>Header 2</span>The Life of Paper Dashboard </h2>
                                        </div>
                                        <div className="typography-line">
                                            <h3>
                                                <span>Header 3</span>The Life of Paper Dashboard </h3>
                                        </div>
                                        <div className="typography-line">
                                            <h4>
                                                <span>Header 4</span>The Life of Paper Dashboard </h4>
                                        </div>
                                        <div className="typography-line">
                                            <h5>
                                                <span>Header 5</span>The Life of Paper Dashboard </h5>
                                        </div>
                                        <div className="typography-line">
                                            <h6>
                                                <span>Header 6</span>The Life of Paper Dashboard </h6>
                                        </div>
                                        <div className="typography-line">
                                            <p>
                                                <span>Paragraph</span>
                                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
                          </p>
                                        </div>
                                        <div className="typography-line">
                                            <span>Quote</span>
                                            <blockquote>
                                                <p className="blockquote blockquote-primary">
                                                    "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                              <br />
                                                    <br />
                                                    <small>
                                                        - Noaa
                              </small>
                                                </p>
                                            </blockquote>
                                        </div>
                                        <div className="typography-line">
                                            <span>Muted Text</span>
                                            <p className="text-muted">
                                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                          </p>
                                        </div>
                                        <div className="typography-line">
                                            <span>Primary Text</span>
                                            <p className="text-primary">
                                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
                                        </div>
                                        <div className="typography-line">
                                            <span>Info Text</span>
                                            <p className="text-info">
                                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                                        </div>
                                        <div className="typography-line">
                                            <span>Success Text</span>
                                            <p className="text-success">
                                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                                        </div>
                                        <div className="typography-line">
                                            <span>Warning Text</span>
                                            <p className="text-warning">
                                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                          </p>
                                        </div>
                                        <div className="typography-line">
                                            <span>Danger Text</span>
                                            <p className="text-danger">
                                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                                        </div>
                                        <div className="typography-line">
                                            <h2>
                                                <span>Small Tag</span>
                                                Header with small subtitle
                            <br />
                                                <small>Use "small" tag for the headers</small>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer footer-black  footer-white ">
                        <div className="container-fluid">
                            <div className="row">
                                <nav className="footer-nav">
                                    <ul>
                                        <li>
                                            <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>
                                        </li>
                                        <li>
                                            <a href="http://blog.creative-tim.com/" target="_blank">Blog</a>
                                        </li>
                                        <li>
                                            <a href="https://www.creative-tim.com/license" target="_blank">Licenses</a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="credits ml-auto">
                                    <span className="copyright">
                                        ©
                        , made with <i className="fa fa-heart heart" /> by Creative Tim
                      </span>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}
export default typography;
