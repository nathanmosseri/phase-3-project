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
import SearchedProfile from './components/SearchedProfile';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState([])
  const [oneUserData, setOneUserData] = useState([])
  const [phaseData, setPhaseData] = useState([])
  const [phasePosts, setPhasePosts] = useState([])
  const [searchedProfile, setSearchedProfile] = useState('')
  const [searchedProfileData, setSearchedProfileData] = useState([])
  const [profileClicked, setProfileClicked] = useState(false)
  const [signUpSubmited,setSignUpSubmited] = useState()
  const [click, setClick] = useState(false)
  // const [userFollowingData, setUserFollowingData] = useState([])


  useEffect(() => {
  fetch('http://localhost:9292/users').then(res => res.json())
  .then((userData) => {
    setUserInfo(userData)
  })
}, [])




  useEffect(() => {
      fetch(`http://localhost:9292/phases-with-posts/${oneUserData.phase_id}`).then(res => res.json())
      .then((phase) => {
        // console.log(phase)
          setPhaseData(phase.phase)
          setPhasePosts(phase.posts)
          
        })
    }, [isLoggedIn, signUpSubmited, click])

     useEffect(() => {
        fetch(`http://localhost:9292/users-by-name/${searchedProfile}`).then(res => res.json())
        .then((data) => {
            setSearchedProfileData(data)
        })
    }, [profileClicked])

  

  // useEffect(() => {
  //   fetch(`http://localhost:9292/followers/${oneUserData.id}`).then(res => res.json())
  //   .then((following) => {
  //     // setUserFollowingData(following.following_id)
  //     setUserFollowingData(following)
  //   })
  // },[])

  let usersNames = []
  userInfo.map((user) => {
    usersNames.unshift(user.name)
    return usersNames
  })


return (
        <>
        <NavBar setIsLoggedIn={setIsLoggedIn} userInfo={userInfo} oneUserData={oneUserData} />
        <div className='background-image'>
        <Switch>
        <Route path='/sign-in'>
          <SignIn setOneUserData={setOneUserData} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path='/sign-up'>
          <SignUp setIsLoggedIn={setIsLoggedIn} userInfo={userInfo} setSignUpSubmited={setSignUpSubmited} setOneUserData={setOneUserData}/>
        </Route>
        <Route path='/general-posts'>
          {!isLoggedIn ? <Redirect to='/sign-in'/> :  <MainPage isLoggedIn={isLoggedIn} userInfo={userInfo} usersNames={usersNames} />}
        </Route>  
        <Route path='/my-profile' >
          {!isLoggedIn ? <Redirect to='/sign-in'/> : <MyProfile isLoggedIn={isLoggedIn} phaseData={phaseData} oneUserData={oneUserData} />}
        </Route>
        <Route path = '/search-users'>
          {!isLoggedIn ? <Redirect to='/sign-in'/> : <SearchUsers userInfo={userInfo} setSearchedProfile={setSearchedProfile} setProfileClicked={setProfileClicked}/>}
        </Route>
        <Route exact path = '/'>
          {!isLoggedIn ? <Redirect to='/sign-in'/> : <PhasePosts userInfo={userInfo} oneUserData={oneUserData} phaseData={phaseData} phasePosts={phasePosts} setClick={setClick}/>}
        </Route>
        <Route path='/searched-profile'>
          {!isLoggedIn ? <Redirect to='/sign-in'/> : <SearchedProfile searchedProfile={searchedProfile} setSearchedProfileData={setSearchedProfileData} searchedProfileData={searchedProfileData} profileClicked={profileClicked}/>}
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
