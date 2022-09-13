import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MyProfile from './components/MyProfile';
import NavBar from './components/NavBar';
import SearchUsers from './components/SearchUsers';
import PhasePosts from './components/PhasePosts';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route path='/sign-in'>
          <SignIn/>
        </Route>
        <Route path='/sign-up'>
          <SignUp/>
        </Route>
        <Route path='/my-profile'>
          <MyProfile/>
        </Route>
        <Route path = '/search-users'>
          <SearchUsers />
        </Route>
        <Route path = '/phase-posts'>
          <PhasePosts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
