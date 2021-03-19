import React from 'react'
import { Login } from './pages/Login/Login'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

export const App = () => {
  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
      <Redirect from="/" to="/login" />
    </Router>
  )
}
