import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search =()=>  {

    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    //first value is the value set in state and second value is for updating
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value )
        //this.setState({ [e.target.name]: e.target.value})
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('please enter something', 'light');

        } else {
            githubContext.searchUsers(text);
            setText('')
        }
    };

    return (
        //bind used to pass this to onsubmit sinceonsumbit has no state
        <div>
            
            <form onSubmit={onSubmit} className="form">
                <input 
                    type="text" 
                    name="text" 
                    placeholder="Search user.." 
                    value={text} 
                    onChange={onChange}
                />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 && (<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>)}
            
            
        </div>
    )
}


export default Search
