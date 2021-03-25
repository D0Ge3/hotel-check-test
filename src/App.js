import React from 'react'
import { Login } from './pages/Login/Login'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Hotels } from './pages/Hotels/Hotels'

export const App = () => {
  require('moment/locale/ru.js')
  return (
    <Router>
      <Redirect from="/" to="/login" />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/hotels">
        <Hotels />
      </Route>
    </Router>
  )
}
