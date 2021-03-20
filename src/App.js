import React from 'react'
import { Login } from './pages/Login/Login'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Hotels } from './pages/Hotels/Hotels'
import { useSelector } from 'react-redux'

export const App = () => {
  require('moment/locale/ru.js')
  const isAuth = useSelector((state) => state.app.isAuth)
  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/hotels">
        <Hotels />
      </Route>
      {!isAuth && <Redirect to="/login" />}
    </Router>
  )
}
