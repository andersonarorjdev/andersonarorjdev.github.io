import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import UseGaTracker from './useGaTracker';

const Routes = props =>{
    // UseGaTracker();
return(
    <BrowserRouter> 
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/projects" component={Projects} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/contact" component={Contact} exact/>
        </Switch>
    </BrowserRouter>
);
}

export default Routes;