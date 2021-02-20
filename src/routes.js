import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const Routes = _ =>{
return(
    <BrowserRouter>
        <Route path="/" component={Home} exact/>
        <Route path="/projects" component={Projects} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/contact" component={Contact} exact/>
    </BrowserRouter>
);
}

export default Routes;