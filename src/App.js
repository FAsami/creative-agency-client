import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import { createContext } from 'react';
import CustomerDashBoard from './Components/Dashboard/CustomerDashboard/CustomerDashboard/CustomerDashBoard';
import AdminDashBoard from './Components/Dashboard/AdminDashboard/AdminDashBoard/AdminDashBoard';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login/Login';
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      setUser({ name: decodedToken.name, email: decodedToken.email })
    }
  }, []);

  return (
    <div className="main-container">
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/login'><Login /></Route>
            <PrivateRoute path='/dashboard/admin/:title'><AdminDashBoard /></PrivateRoute>
            <PrivateRoute path='/dashboard/:title'><CustomerDashBoard /></PrivateRoute>
            <Route path='*'><NotFound /></Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
