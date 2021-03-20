import React from 'react'
import { useSelector } from 'react-redux'
import { LoginForm } from '../../components/LoginForm/LoginForm'

import s from './Login.module.scss'
import { Redirect } from 'react-router-dom'

export const Login = () => {
  const isAuth = useSelector((state) => state.app.isAuth)
  if (isAuth) {
    return <Redirect to="/hotels" />
  }
  return (
    <div className={s.root}>
      <LoginForm />
    </div>
  )
}
