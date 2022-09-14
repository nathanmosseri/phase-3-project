import { Route, Switch, Redirect } from 'react-router-dom';
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
  const [oneUserData, setOneUserData] = useState({})

  useEffect(() => {
  fetch('http://localhost:9292/users').then(res => res.json())
  .then((userData) => {
    setUserInfo(userData)
  })
}, [])


return (
        <>
        <NavBar setIsLoggedIn={setIsLoggedIn} userInfo={userInfo}/>
        <div className='full-screen-container'>
        <Switch>
        <Route path='/sign-in'>
        <div className='login-signup'>
          <SignIn setOneUserData={setOneUserData} setIsLoggedIn={setIsLoggedIn} />
        </div>
        </Route>
        <Route path='/sign-up'>
        <div className='login-signup'>
          <SignUp setIsLoggedIn={setIsLoggedIn} userInfo={userInfo}/>
        </div>
        </Route>
        <Route path='/general-posts'>
          {!isLoggedIn ? <Redirect to='/sign-in'/> :  <MainPage isLoggedIn={isLoggedIn} userInfo={userInfo}/>}
        </Route>  
        <Route path='/my-profile' >
          {!isLoggedIn ? <Redirect to='/sign-in'/> : <MyProfile isLoggedIn={isLoggedIn}/>}
        </Route>
        <Route path = '/search-users'>
          {!isLoggedIn ? <Redirect to='/sign-in'/> : <SearchUsers />}
        </Route>
        <Route exact path = '/'>
          {!isLoggedIn ? <Redirect to='/sign-in'/> : <PhasePosts />}
        </Route>
        <Route path = '*'>
          <h1>PAGE NOT FOUND</h1>
        </Route>
        </Switch>
        </div>
        </>

  )
      {/* <Switch>
        <Route path='/sign-in'>
          <SignIn setOneUserData={setOneUserData} setIsLoggedIn={setIsLoggedIn} userInfo={userInfo}/>
        </Route>
        <Route path='/sign-up'>
          <SignUp setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route exact path='/'>
          <MainPage isLoggedIn={isLoggedIn} userInfo={userInfo}/>
        </Route>
      </Switch> */}

  // return (
  //   <div className="App">
  //     {logInVariable}
  //   </div>
    
  // );
}

export default App;
