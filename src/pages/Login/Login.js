import React from 'react'

import { LoginForm } from '../../components/LoginForm/LoginForm'

import s from './Login.module.scss'

export const Login = () => {
  return (
    <div className={s.root}>
      <LoginForm />
    </div>
  )
}
