import React, {useState, Fragment} from 'react';
import './App.css';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';



import './App.css';


const App =()=> {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])
  const [alert, setAlert] = useState(null)

  // //runs when ocmpnents log
  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({ loading: true });

  //   this.setState({ users: res.data, loading: false })

  // }

  //search github users
  const searchUsers = async (text) => {
    //fetch from github here as it is when app starts
    //console.log(text);

    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUsers(res.data.items);
    setLoading(false);

  }
  //get single git hub user
  const getUser = async (username) => {
    setLoading(true)

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


    setUser(res.data);
    setLoading(false);
    

  }

  const getUserRepos = async (username) => {
    setLoading(true)

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setRepos(res.data);
    setLoading(false);


  }

  const clearUsers = ()=> {
    setUsers([]);
    setLoading(false);


  };

  const showAlert =(msg, type)=> {
    setAlert({msg,type});
    setTimeout(()=> setAlert(null), 5000)


  }


  //title="Github Finder" icon='fab fa-github'
  return (
    <Router>
    <div className='App'>
      <Navbar />
      
      <div className="container">
        <Alert alert={alert}/>
        <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
              <Search 
                searchUsers={searchUsers} 
                clearUsers={clearUsers} 
                showClear={
                users.length > 0 ? true : false
                }
                setAlert = {showAlert}

              />
              <Users loading ={loading} users ={users}/>
            </Fragment>
          )}

          />
        </Switch>
        <Route exact path= '/about' component = {About}/>
        <Route exact path= '/user/:login' render= {props => (
          <User 
            { ...props } 
            getUser={getUser} 
            getUserRepos={getUserRepos} 
            user= {user} 
            repos={repos}
            loading = {loading} />
        )} />
        
      </div>
      
    </div>
    </Router>
  );


  
}

export default App;
