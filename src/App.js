import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import { login, logout, selectUser } from './features/counter/UserSlice';
import { auth } from './firebase';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';
import SignUp from './Pages/SignUp';



function App() {
  const user = useSelector(selectUser)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    })
    return unsubcribe
  }, [dispatch])
  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
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

