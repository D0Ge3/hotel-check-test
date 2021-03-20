import React from 'react'
import { Login } from './pages/Login/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Hotels } from './pages/Hotels/Hotels'

export const App = () => {
  // require('moment/locale/ru.js')
  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/hotels">
        <Hotels />
      </Route>
      {/* <Redirect from="/" to="/hotels" /> */}
    </Router>
  )
}
