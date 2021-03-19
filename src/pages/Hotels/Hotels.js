import React from 'react'

import { Header } from '../../components/Header/Header'
import { Filters } from '../../components/Filters/Filters'
import { Favourites } from '../../components/Favourites/Favourites'
import { HotelsWrapper } from '../../components/HotelsWrapper/HotelsWrapper'

import s from './Hotels.module.scss'

export const Hotels = () => {
  return (
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
  )
}
