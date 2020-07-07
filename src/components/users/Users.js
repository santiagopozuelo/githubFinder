import React, { useContext } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';


const Users = () => {
const githubContext = useContext(GithubContext)

const { loading, users } = githubContext;

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

//style variable for my user grid
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users
