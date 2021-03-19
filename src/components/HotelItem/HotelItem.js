import React from 'react'

import { FavouriteIcon } from '../../ui/icons/FavouriteIcon/FavouriteIcon'
import { HouseIcon } from '../../ui/icons/HouseIcon/HouseIcon'
import { StarsIndicator } from '../StarsIndicator/StarsIndicator'

import s from './HotelItem.module.scss'

export const HotelItem = ({ style, showIcon }) => {
  return (
    <div style={style} className={s.wrapper}>
      {showIcon && <HouseIcon style={{ marginRight: '24px' }} />}
      <div className={s.infoWrapper}>
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
    </div>
  )
}
