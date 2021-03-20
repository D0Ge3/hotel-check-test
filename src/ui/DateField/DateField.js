import React from 'react'
import * as cn from 'classnames'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import s from './DateField.module.scss'
// eslint-disable-next-line
export const DateField = ({ name, value, onChange, labelStyle, label, style, error, ...rest }) => {
  const labelCn = cn({
    [s.label]: true,
    [s.label_error]: error,
  })
  const fieldCn = cn({
    [s.field]: true,
    [s.field_error]: error,
  })
  return (
    <div style={style} className={s.wrapper}>
      <label className={labelCn} style={labelStyle} htmlFor={name}>
        {label}
      </label>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        onChange={onChange}
        selected={value}
        name={name}
        id={name}
        className={fieldCn}
        {...rest}
      />
    </div>
  )
}
