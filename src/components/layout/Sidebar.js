import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Image} from 'react-bootstrap';

const Sidebar = () => {

    return (
        <div className={'leftNavContainer'}>
            <ul>
                <NavLink className='navLink' activeClassName='activeNavLink' to='/' exact>Home</NavLink><br/>
                <NavLink className='navLink' activeClassName='activeNavLink' to='/people'>People</NavLink><br/>
                <NavLink className='navLink' activeClassName='activeNavLink' to='/404Error'>404 Error</NavLink><br/>
                <Link to='/unicorn'>
                    <Image src='/assets/unicorn.png' width={50}/>
                </Link>

            </ul>
        </div>
    );
};

export default Sidebar;