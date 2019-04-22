import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import Shop from './components/Shop/shop';
import Features from './components/Features/features';
import Blog from './components/Blog/blog';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Cart from './components/Cart/cart';
import Productdetail from './components/Productdetail/productdetail';
import Blogdetail from './components/Blogdetail/blogdetail';
import Login from './components/Login/login';
import Register from './components/Register/register';

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/Shop' component={Shop} />
                    <Route path='/Features' component={Features} />
                    <Route path='/Blog' component={Blog} />
                    <Route path='/About' component={About} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/Cart' component={Cart} />
                    <Route path='/Productdetail' component={Productdetail} />
                    <Route path='/Blogdetail' component={Blogdetail} />
                    <Route path='/Login' component={Login} />
                    <Route path='/Register' component={Register} />

                </Switch>
            </Router>
        );
    }
}

export default App;
