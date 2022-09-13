import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <p>Name: {loggedInUser.name}</p>  
    <Router>
    <Header/>
    <Switch>
      <Route path="/home"><Home /></Route>
      <Route path="/login"><Login /></Route>
      <PrivateRoute path="/book/:bedType"><Book /></PrivateRoute>
      <Route path="/"><Home /></Route>
    </Switch>
</Router>
</UserContext.Provider>
  );
}

export default App;
