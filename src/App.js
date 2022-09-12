import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AccountSettings from './components/AccountSettings';
import NavBar from './components/NavBar';

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
        <Route path='/account-settings'>
          <AccountSettings/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
