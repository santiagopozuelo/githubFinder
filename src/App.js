import React, {useState, Fragment} from 'react';
import './App.css';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/githubState'
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'


import './App.css';


const App =()=> {
  const [alert, setAlert] = useState(null)

  // //runs when ocmpnents log
  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({ loading: true });

  //   this.setState({ users: res.data, loading: false })

  // }

  //search github users


  //title="Github Finder" icon='fab fa-github'
  return (
    <GithubState>
      <AlertState>
      <Router>
      <div className='App'>
        <Navbar />
        
        <div className="container">
          <Alert/>
          <Switch>
            <Route exact path='/' component = {Home}/>
          
          <Route exact path= '/about' component = {About}/>
          <Route exact path= '/user/:login' component={User} />
          <Route component={NotFound}></Route>
          </Switch>
          
        </div>
        
      </div>
      </Router>
      </AlertState>
    </GithubState>
  );


  
}

export default App;
