import React from 'react'
import { useSelector } from 'react-redux'

import { Header } from '../../components/Header/Header'
import { Filters } from '../../components/Filters/Filters'
import { Favourites } from '../../components/Favourites/Favourites'
import { HotelsWrapper } from '../../components/HotelsWrapper/HotelsWrapper'

import s from './Hotels.module.scss'
import { Redirect } from 'react-router'

export const Hotels = () => {
  const isAuth = useSelector((state) => state.app.isAuth)

  return isAuth ? (
    <div className={s.root}>
      <Header />
      <div className={s.wrapper}>
        <div className={s.panel}>
          <Filters />
          <Favourites />
        </div>
        <div className={s.main}>
          <HotelsWrapper />
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  )
}
