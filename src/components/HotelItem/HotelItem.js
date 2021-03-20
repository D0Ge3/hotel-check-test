import React from 'react'

import { FavouriteIcon } from '../../ui/icons/FavouriteIcon/FavouriteIcon'
import { HouseIcon } from '../../ui/icons/HouseIcon/HouseIcon'
import { StarsIndicator } from '../StarsIndicator/StarsIndicator'

import s from './HotelItem.module.scss'

export const HotelItem = ({ style, showIcon, hotel }) => {
  return (
    <div style={style} className={s.wrapper}>
      {showIcon && <HouseIcon style={{ marginRight: '24px' }} />}
      <div className={s.infoWrapper}>
        <div className={s.titleWrap}>
          <span className={s.title}>{hotel.hotelName}</span>
          <FavouriteIcon />
        </div>
        <div className={s.dateWrap}>
          <span className={s.date}>28 June 2020</span>
          <span className={s.days}>1 день</span>
        </div>
        <div className={s.levelWrap}>
          <StarsIndicator countStars={hotel.stars} />
          <div className={s.priceWrap}>
            <span className={s.price}>Price:</span>
            <span className={s.priceValue}>{hotel.priceAvg}Р</span>
          </div>
        </div>
      </div>
    </div>
  )
}
