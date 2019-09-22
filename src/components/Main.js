import React from 'react';
import '../css/App.css';
import '../css/Main.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';


const Main = () => (
    <main className="main">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects' component={Projects} />
        </Switch>
    </main>
)

export default Main;
