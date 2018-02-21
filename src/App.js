import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import PeopleContainer from './components/people/PeopleContainer';
import PersonContainer from './components/people/PersonContainer';
import Unicorn2 from './components/unicorn/Unicorn2';

const App = () => {

    return (
        <Router>
            <div>
                <Header/>
                <Sidebar/>
                <div className={'rightContentContainer'}>

                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path={'/unicorn'} component={Unicorn2}/>

                        <Route path='/people/:id/:name/:occupation' component={PersonContainer}/>
                        <Route path='/people' component={PeopleContainer}/>

                        <Route component={PageNotFound}/>
                    </Switch>

                </div>
            </div>
        </Router>
    );
};

export default App;