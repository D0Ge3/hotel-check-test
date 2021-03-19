import React from 'react'

import { FavouriteIcon } from '../FavouriteIcon/FavouriteIcon'
import { StarsIndicator } from '../StarsIndicator/StarsIndicator'

import s from './HotelItem.module.scss'

export const HotelItem = ({ style }) => {
  return (
    <div style={style} className={s.wrapper}>
      <div className={s.titleWrap}>
        <span className={s.title}>Moscow Mariott Grand Hotel</span>
        <FavouriteIcon />
      </div>
      <div className={s.dateWrap}>
        <span className={s.date}>28 June 2020</span>
        <span className={s.days}>1 день</span>
      </div>
      <div className={s.levelWrap}>
        <StarsIndicator countStars={1} />
        <div className={s.priceWrap}>
          <span className={s.price}>Price:</span>
          <span className={s.priceValue}>23 924Р</span>
        </div>
      </div>
    </div>
  )
}
