import React, { Component } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


const Users = ({ users, loading}) => {

    if(loading) {
        return <Spinner />
    } else {
        return (
            //for each user in users get login
            //passing in prop to useritemls
    
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
                
            </div>
        );
    }

}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

//style variable for my user grid
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users
