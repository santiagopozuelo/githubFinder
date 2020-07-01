import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search =({searchUsers, showClear, clearUsers, setAlert})=>  {
    //first value is the value set in state and second value is for updating
    const [text, setText] = useState('')



    const onChange = (e) => {
        setText(e.target.value )
        //this.setState({ [e.target.name]: e.target.value})
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if (text === '') {
            setAlert('please enter something', 'light');

        } else {
            searchUsers(text);
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
            {showClear && (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>)}
            
            
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}
export default Search
