import React from 'react'

import { SortIcon } from '../SortIcon/SortIcon'

import s from './SortingBtn.module.scss'

export const SortingBtn = ({ sortMode, text, style, onClick }) => {
  return (
    <button className={s.button} onClick={onClick} style={style}>
      <span className={s.text}>{text}</span>
      <SortIcon sortMode={sortMode} />
    </button>
  )
}
