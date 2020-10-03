import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddAppointmentPage from './Pages/AddAppointmentPage';
import PatientsAllAppointments from './Pages/PatientsAllAppointments';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (

        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Switch>

              <Route path="/home">
                <HomePage></HomePage>
              </Route>

              <PrivateRoute path="/addAppointment">
                <AddAppointmentPage></AddAppointmentPage>
              </PrivateRoute>
              
              <Route path="/allAppointments">
                <PatientsAllAppointments></PatientsAllAppointments>
              </Route>

              <Route exact path="/">
                <HomePage></HomePage>
              </Route>

              <Route path="/login">
                <LoginPage></LoginPage>
              </Route>

            </Switch>
          </Router>
        </UserContext.Provider>

  );
}

export default App;
