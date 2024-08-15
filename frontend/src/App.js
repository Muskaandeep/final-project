// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/" component={Dashboard} />
            </Switch>
        </Router>
    );
}

export default App;
