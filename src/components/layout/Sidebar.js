import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Image} from 'react-bootstrap';

const Sidebar = () => {

    return (
        <div className={'leftNavContainer'}>
            <NavLink className='navLink' activeClassName='activeNavLink' to='/' exact>Home</NavLink><br/>
            <NavLink className='navLink' activeClassName='activeNavLink' to='/404Error'>404 Error</NavLink><br/>
            <p/>
            <Link to='/unicorn2'>
                <Image src='/assets/unicorn.png' width={50} />
            </Link>
        </div>
    );


};

export default Sidebar;
