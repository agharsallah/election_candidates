import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Stat from './components/stat/Stat';
import About from './components/about/About';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/stat" component={Stat} />
                <Route exact path="/about" component={About} />
            </Switch>

        );
    }
}

export default App;