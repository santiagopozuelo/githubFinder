import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//functional component
//destructuring
const UserItem = ({user: {login, avatar_url, html_url} }) => {
    //destructuring object
    //this prop passed through users.js
    //const { login, avatar_url, html_url} = props.user;

    return (
        <div className ="card text-center">
            <img src={avatar_url} 
            alt="" 
            className="round-img" 
            style={{ width: '60px'}}
            />
            <h3>{login}</h3>

            <div>
                <Link to={`/user/${login}`} className = "btn btn-dark btn-sm my-1">
                    More
                </Link>
            </div>
        </div>
    );

};

UserItem.propTypes = {
    //es7 shortcut ptor
    user: PropTypes.object.isRequired,
}

export default UserItem
