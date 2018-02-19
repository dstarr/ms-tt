import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Image} from 'react-bootstrap';

const Sidebar = () => {

    return (
        <div className={'leftNavContainer'}>
            <NavLink className='navLink' activeClassName='activeNavLink' to='/' exact>Home</NavLink><br/>
            <NavLink className='navLink' activeClassName='activeNavLink' to='/404Error'>404 Error</NavLink><br/>
        </div>
    );


};

export default Sidebar;
