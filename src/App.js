import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MyProfile from './components/MyProfile';
import NavBar from './components/NavBar';
import SearchUsers from './components/SearchUsers';
import PhasePosts from './components/PhasePosts';
import { useEffect, useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
  fetch('http://localhost:9292/users').then(res => res.json())
  .then((userData) => {
    setUserInfo(userData)
  })
}, [])

  return (
    <div className="App">
      <NavBar setIsLoggedIn={setIsLoggedIn} userInfo={userInfo}/>
      <Switch>
        <Route path='/sign-in'>
          <SignIn setIsLoggedIn={setIsLoggedIn} userInfo={userInfo}/>
        </Route>
        <Route path='/sign-up'>
          <SignUp setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route exact path='/'>
          <MainPage isLoggedIn={isLoggedIn} userInfo={userInfo}/>
        </Route>
        {isLoggedIn ? <>
        <Route path='/my-profile' isLoggedIn={isLoggedIn}>
          <MyProfile/>
        </Route>
        <Route path = '/search-users'>
          <SearchUsers />
        </Route>
        <Route path = '/phase-posts'>
          <PhasePosts />
        </Route> 
        </>: ""}
      </Switch>
    </div>
  );
}

export default App;
