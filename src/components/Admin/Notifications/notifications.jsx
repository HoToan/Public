import React, { Component } from 'react';
import Menu from '../Admin/Menu';

class notifications extends Component {
    render() {
        return (
            <div className="wrapper ">
                <Menu />
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
                    {/* <div class="panel-header">
      
      
      <div class="header text-center">
          <h2 class="title">Notifications</h2>
          <p class="category">Handcrafted by our friend <a target="_blank" href="https://github.com/mouse0270">Robert McIntosh</a>. Please checkout the <a href="http://bootstrap-notify.remabledesigns.com/" target="_blank">full documentation.</a></p>
      </div>
      
    </div> */}
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Notifications</h5>
                                        <p className="card-category">Handcrafted by our friend
                          <a target="_blank" href="https://github.com/mouse0270">Robert McIntosh</a>. Please checkout the
                          <a href="http://bootstrap-notify.remabledesigns.com/" target="_blank">full documentation.</a>
                                        </p>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card card-plain">
                                                    <div className="card-header">
                                                        <h5 className="card-title">Notifications Style</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="alert alert-info">
                                                            <span>This is a plain notification</span>
                                                        </div>
                                                        <div className="alert alert-info alert-dismissible fade show">
                                                            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
                                                                <i className="nc-icon nc-simple-remove" />
                                                            </button>
                                                            <span>This is a notification with close button.</span>
                                                        </div>
                                                        <div className="alert alert-info alert-with-icon alert-dismissible fade show" data-notify="container">
                                                            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
                                                                <i className="nc-icon nc-simple-remove" />
                                                            </button>
                                                            <span data-notify="icon" className="nc-icon nc-bell-55" />
                                                            <span data-notify="message">This is a notification with close button and icon.</span>
                                                        </div>
                                                        <div className="alert alert-info alert-with-icon alert-dismissible fade show" data-notify="container">
                                                            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
                                                                <i className="nc-icon nc-simple-remove" />
                                                            </button>
                                                            <span data-notify="icon" className="nc-icon nc-chart-pie-36" />
                                                            <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card card-plain">
                                                    <div className="card-header">
                                                        <h5 className="card-title">Notification states</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="alert alert-primary alert-dismissible fade show">
                                                            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
                                                                <i className="nc-icon nc-simple-remove" />
                                                            </button>
                                                            <span>
                                                                <b> Primary - </b> This is a regular notification made with ".alert-primary"</span>
                                                        </div>
                                                        <div className="alert alert-info alert-dismissible fade show">
                                                            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
                                                                <i className="nc-icon nc-simple-remove" />
                                                            </button>
                                                            <span>
                                                                <b> Info - </b> This is a regular notification made with ".alert-info"</span>
                                                        </div>
                                                        <div className="alert alert-success alert-dismissible fade show">
                                                            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
                                                                <i className="nc-icon nc-simple-remove" />
                                                            </button>
                                                            <span>
                                                                <b> Success - </b> This is a regular notification made with ".alert-success"</span>
                                                        </div>
                                                        <div className="alert alert-warning alert-dismissible fade show">
                                                            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
                                                                <i className="nc-icon nc-simple-remove" />
                                                            </button>
                                                            <span>
                                                                <b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
                                                        </div>
                                                        <div className="alert alert-danger alert-dismissible fade show">
                                                            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
                                                                <i className="nc-icon nc-simple-remove" />
                                                            </button>
                                                            <span>
                                                                <b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="places-buttons">
                                            <div className="row">
                                                <div className="col-md-6 ml-auto mr-auto text-center">
                                                    <h4 className="card-title">
                                                        Notifications Places
                                <p className="category">Click to view notifications</p>
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-8 ml-auto mr-auto">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <button className="btn btn-primary btn-block" onclick="demo.showNotification('top','left')">Top Left</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <button className="btn btn-primary btn-block" onclick="demo.showNotification('top','center')">Top Center</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <button className="btn btn-primary btn-block" onclick="demo.showNotification('top','right')">Top Right</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-8 ml-auto mr-auto">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <button className="btn btn-primary btn-block" onclick="demo.showNotification('bottom','left')">Bottom Left</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <button className="btn btn-primary btn-block" onclick="demo.showNotification('bottom','center')">Bottom Center</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <button className="btn btn-primary btn-block" onclick="demo.showNotification('bottom','right')">Bottom Right</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
export default notifications;
