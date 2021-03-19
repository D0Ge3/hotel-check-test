import React from 'react'
import * as cn from 'classnames'
import s from './TextField.module.scss'

// eslint-disable-next-line
export const TextField = ({ name, type = 'text', value, onChange, labelStyle, label, style, error, ...rest }) => {
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
      <input
        value={value}
        onChange={onChange}
        className={fieldCn}
        type={type}
        id={name}
        {...rest}
      />
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
}
