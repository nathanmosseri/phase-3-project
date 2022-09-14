import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MyProfile from './components/MyProfile';
import NavBar from './components/NavBar';
import SearchUsers from './components/SearchUsers';
import PhasePosts from './components/PhasePosts';
import 'bootstrap/dist/css/bootstrap.min.css';
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


let logInVariable = isLoggedIn ? (
        <>
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
        <Route path='/my-profile' isLoggedIn={isLoggedIn}>
          <MyProfile/>
        </Route>
        <Route path = '/search-users'>
          <SearchUsers />
        </Route>
        <Route path = '/phase-posts'>
          <PhasePosts />
        </Route>
        {/* <Route path = '*'>
          <h1>PAGE NOT FOUND</h1>
        </Route> */}
        </Switch>
        </>
) : (
  <>
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
      </Switch>
  </>
);

  return (
    <div className="App">
      {logInVariable}
    </div>
  );
}

export default App;
