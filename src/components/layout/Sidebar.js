import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Image} from 'react-bootstrap';

const Sidebar = () => {

    const links = [
        {name: 'Home', url: '/'},
        {name: '404 Error', url: '/404Error'},
    ];

    let linksComponents = links.map((link, index) => {
        return (
            <li key={index} className='nav'>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'}
                         to={link.url} exact>{link.name}</NavLink>
            </li>
        );
    });

    return (
        <div className={'leftNavContainer'}>
            <ul>
                {linksComponents}
            </ul>
            <Link to='/unicorn'>
                <Image src='/assets/unicorn.png' width={100}/>
            </Link>

        </div>
    );
};

export default Sidebar;