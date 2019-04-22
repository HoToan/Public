import React, { Component } from 'react';
import Menu from '../Admin/Menu';

class upgrade extends Component {
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
                            <div className="col-md-8 ml-auto mr-auto">
                                <div className="card card-upgrade">
                                    <div className="card-header text-center">
                                        <h4 className="card-title">Paper Dashboard PRO</h4>
                                        <p className="card-category">Are you looking for more components? Please check our Premium Version of Paper Dashboard PRO.</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive table-upgrade">
                                            <table className="table">
                                                <thead>
                                                    <tr><th />
                                                        <th className="text-center">Free</th>
                                                        <th className="text-center">PRO</th>
                                                    </tr></thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Components</td>
                                                        <td className="text-center">16</td>
                                                        <td className="text-center">160</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Plugins</td>
                                                        <td className="text-center">4</td>
                                                        <td className="text-center">13</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Example Pages</td>
                                                        <td className="text-center">7</td>
                                                        <td className="text-center">27</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Login, Register, Pricing, Lock Pages</td>
                                                        <td className="text-center"><i className="nc-icon nc-simple-remove text-danger" /></td>
                                                        <td className="text-center"><i className="nc-icon nc-check-2 text-success" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>
                                                        <td className="text-center"><i className="nc-icon nc-simple-remove text-danger" /></td>
                                                        <td className="text-center"><i className="nc-icon nc-check-2 text-success" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mini Sidebar</td>
                                                        <td className="text-center"><i className="nc-icon nc-simple-remove text-danger" /></td>
                                                        <td className="text-center"><i className="nc-icon nc-check-2 text-success" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Premium Support</td>
                                                        <td className="text-center"><i className="nc-icon nc-simple-remove text-danger" /></td>
                                                        <td className="text-center"><i className="nc-icon nc-check-2 text-success" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td className="text-center">Free</td>
                                                        <td className="text-center">Just $39</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center" />
                                                        <td className="text-center">
                                                            <a href="#" className="btn btn-round btn-default disabled">Current Version</a>
                                                        </td>
                                                        <td className="text-center">
                                                            <a target="_blank" href="https://www.creative-tim.com/product/paper-dashboard-2-pro?ref=pd-free-upgrade-live" className="btn btn-round btn-primary">Upgrade to PRO</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
export default upgrade;
