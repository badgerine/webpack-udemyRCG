import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncPizza = asyncComponent(() => {
  return import('./containers/Pizza');
});

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact Component={Users}/>
                    <Route path="/pizza" Component={asyncPizza}/>
                </div>
            </div>
        );
    }
}

export default App;