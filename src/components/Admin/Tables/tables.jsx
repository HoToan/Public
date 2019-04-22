import React, { Component } from 'react';
import Menu from '../Admin/Menu';

class tables extends Component {
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
                                        <h4 className="card-title"> Simple Table</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead className=" text-primary">
                                                    <tr><th>
                                                        Name
                                </th>
                                                        <th>
                                                            Country
                                </th>
                                                        <th>
                                                            City
                                </th>
                                                        <th className="text-right">
                                                            Salary
                                </th>
                                                    </tr></thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            Dakota Rice
                                </td>
                                                        <td>
                                                            Niger
                                </td>
                                                        <td>
                                                            Oud-Turnhout
                                </td>
                                                        <td className="text-right">
                                                            $36,738
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Minerva Hooper
                                </td>
                                                        <td>
                                                            Curaçao
                                </td>
                                                        <td>
                                                            Sinaai-Waas
                                </td>
                                                        <td className="text-right">
                                                            $23,789
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Sage Rodriguez
                                </td>
                                                        <td>
                                                            Netherlands
                                </td>
                                                        <td>
                                                            Baileux
                                </td>
                                                        <td className="text-right">
                                                            $56,142
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Philip Chaney
                                </td>
                                                        <td>
                                                            Korea, South
                                </td>
                                                        <td>
                                                            Overland Park
                                </td>
                                                        <td className="text-right">
                                                            $38,735
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Doris Greene
                                </td>
                                                        <td>
                                                            Malawi
                                </td>
                                                        <td>
                                                            Feldkirchen in Kärnten
                                </td>
                                                        <td className="text-right">
                                                            $63,542
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Mason Porter
                                </td>
                                                        <td>
                                                            Chile
                                </td>
                                                        <td>
                                                            Gloucester
                                </td>
                                                        <td className="text-right">
                                                            $78,615
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Jon Porter
                                </td>
                                                        <td>
                                                            Portugal
                                </td>
                                                        <td>
                                                            Gloucester
                                </td>
                                                        <td className="text-right">
                                                            $98,615
                                </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card card-plain">
                                    <div className="card-header">
                                        <h4 className="card-title"> Table on Plain Background</h4>
                                        <p className="card-category"> Here is a subtitle for this table</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead className=" text-primary">
                                                    <tr><th>
                                                        Name
                                </th>
                                                        <th>
                                                            Country
                                </th>
                                                        <th>
                                                            City
                                </th>
                                                        <th className="text-right">
                                                            Salary
                                </th>
                                                    </tr></thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            Dakota Rice
                                </td>
                                                        <td>
                                                            Niger
                                </td>
                                                        <td>
                                                            Oud-Turnhout
                                </td>
                                                        <td className="text-right">
                                                            $36,738
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Minerva Hooper
                                </td>
                                                        <td>
                                                            Curaçao
                                </td>
                                                        <td>
                                                            Sinaai-Waas
                                </td>
                                                        <td className="text-right">
                                                            $23,789
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Sage Rodriguez
                                </td>
                                                        <td>
                                                            Netherlands
                                </td>
                                                        <td>
                                                            Baileux
                                </td>
                                                        <td className="text-right">
                                                            $56,142
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Philip Chaney
                                </td>
                                                        <td>
                                                            Korea, South
                                </td>
                                                        <td>
                                                            Overland Park
                                </td>
                                                        <td className="text-right">
                                                            $38,735
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Doris Greene
                                </td>
                                                        <td>
                                                            Malawi
                                </td>
                                                        <td>
                                                            Feldkirchen in Kärnten
                                </td>
                                                        <td className="text-right">
                                                            $63,542
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Mason Porter
                                </td>
                                                        <td>
                                                            Chile
                                </td>
                                                        <td>
                                                            Gloucester
                                </td>
                                                        <td className="text-right">
                                                            $78,615
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Jon Porter
                                </td>
                                                        <td>
                                                            Portugal
                                </td>
                                                        <td>
                                                            Gloucester
                                </td>
                                                        <td className="text-right">
                                                            $98,615
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
export default tables;
