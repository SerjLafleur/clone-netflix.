import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';
import SignUp from './Pages/SignUp';



function App() {
  const user = null
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Router>
        {!user ? (<Login />) : (
          <Switch>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/checkout'>
              <Paypal />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    minHeight: "100vh"
  },
}))

export default App;

