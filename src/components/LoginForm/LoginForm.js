import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { TextField } from '../../ui/TextField/TextField'
import { Button } from '../../ui/Button/Button'

import s from './LoginForm.module.scss'

const LoginSchema = Yup.object().shape({
  login: Yup.string()
    .email('Неправильный формат email!')
    .required('Обязательное поле!'),
  password: Yup.string()
    .required('Обязательное поле!')
    .min(8, 'Пароль должен быть длиннее 8 символов!')
    .matches(/[A-Za-z]{1,}/, {
      message: 'Пароль может состоять только мз латиницы!',
    }),
})

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })
  const { errors, touched } = formik
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Simple Hotel Check</h3>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <TextField
          value={formik.values.login}
          onChange={formik.handleChange}
          name="login"
          label="Логин"
          labelStyle={{ fontWeight: '300' }}
          error={touched.login && errors.login}
        />
        <TextField
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
          name="password"
          label="Пароль"
          labelStyle={{ fontWeight: '300' }}
          error={touched.password && errors.password}
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
