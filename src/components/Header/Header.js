import React from 'react'
import { useDispatch } from 'react-redux'
import { LogOutIcon } from '../../ui/icons/LogOutIcon/LogOutIcon'

import { logout } from '../../redux/actions/appActions'

import s from './Header.module.scss'

export const Header = () => {
  const dispatch = useDispatch()
  return (
    <nav className={s.root}>
      <h2 className={s.title}>Simple Hotel Check</h2>
      <button onClick={() => dispatch(logout())} className={s.logout}>
        <span>Выйти</span>
        <LogOutIcon />
      </button>
    </nav>
  )
}
