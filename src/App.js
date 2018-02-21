import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';

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