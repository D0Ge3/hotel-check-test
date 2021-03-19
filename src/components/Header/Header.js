import React from 'react'
import { LogOutIcon } from '../LogOutIcon/LogOutIcon'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <nav className={s.root}>
      <h2 className={s.title}>Simple Hotel Check</h2>
      <div className={s.logout}>
        <span>Выйти</span>
        <LogOutIcon />
      </div>
    </nav>
  )
}
