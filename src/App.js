import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Unicorn from './components/unicorn/Unicorn';
import PeopleContainer from './components/people/PeopleContainer';
import PersonContainer from './components/people/PersonContainer';

const App = () => {

    return (
        <Router>
            <div>
                <Header/>
                <div className={'rightContentContainer'}>



                </div>

            </div>
        </Router>
    );
};

export default App;