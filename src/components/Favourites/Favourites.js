import React from 'react'

import s from './Favourites.module.scss'
import { SortingBtn } from '../SortingBtn/SortingBtn'

export const Favourites = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Избранное</h3>
      <div className={s.sortWrapper}>
        <SortingBtn text="Рейтинг" style={{ marginRight: '9px' }} />
        <SortingBtn text="Цена" />
      </div>
    </div>
  )
}
