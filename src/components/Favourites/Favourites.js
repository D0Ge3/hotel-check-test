import React from 'react'

import { SortingBtn } from '../SortingBtn/SortingBtn'
import { HotelsList } from '../HotelsList/HotelsList'

import s from './Favourites.module.scss'

export const Favourites = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Избранное</h3>
      <div className={s.sortWrapper}>
        <SortingBtn text="Рейтинг" style={{ marginRight: '9px' }} />
        <SortingBtn text="Цена" />
      </div>
      <HotelsList />
    </div>
  )
}
