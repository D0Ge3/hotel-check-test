import React from 'react'
import * as cn from 'classnames'

import { SortIcon } from '../SortIcon/SortIcon'

import s from './SortingBtn.module.scss'

export const SortingBtn = ({ sortMode, text, style, onClick }) => {
  const btnCn = cn({
    [s.button]: true,
    [s.button_active]: sortMode,
  })
  const textCn = cn({
    [s.text]: true,
    [s.text_active]: sortMode,
  })
  return (
    <button className={btnCn} onClick={onClick} style={style}>
      <span className={textCn}>{text}</span>
      <SortIcon sortMode={sortMode} />
    </button>
  )
}
