import React from 'react';
//impt
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Navbar = ({icon,title}) => {
    //with Link the data from search is not erase when go to about
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className = {icon} />{title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                    
                </li>
            </ul>
        </nav>

    )
}

//will be overwritten by props in appjs if passed
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
