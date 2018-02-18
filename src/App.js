import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Unicorn from './components/unicorn/Unicorn';
import Fade from './components/transition/Fade';


const App = () => {

    return (
        <Router>
            <div>
                <Header/>
                <Sidebar/>
                <div className={'rightContentContainer'}>

                    <Switch>
                        <Route path='/' component={Home} exact/>

                        <Route path='/transitions' component={Fade} />

                        <Route path={'/unicorn'} component={Unicorn}/>

                        <Route component={PageNotFound}/>
                    </Switch>

                </div>
            </div>
        </Router>
    );
};

export default App;