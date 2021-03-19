import React, { useState } from 'react'

import { TextField } from '../../ui/TextField/TextField'
import { Button } from '../../ui/Button/Button'

import s from './LoginForm.module.scss'

export const LoginForm = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const sumbitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Simple Hotel Check</h3>
      <form className={s.form} onSubmit={sumbitHandler}>
        <TextField
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          name="login"
          label="Логин"
          labelStyle={{ fontWeight: '300' }}
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          label="Пароль"
          labelStyle={{ fontWeight: '300' }}
        />
        <Button
          text="Войти"
          type="submit"
          style={{ width: '100%', height: '50px' }}
        />
      </form>
    </div>
  )
}
