import React from 'react'

import s from './Button.module.scss'

export const Button = ({ onClick, type, text, style }) => {
  return (
    <button style={style} className={s.button} onClick={onClick} type={type}>
      {text}
    </button>
  )
}
