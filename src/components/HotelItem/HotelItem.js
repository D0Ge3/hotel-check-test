import React from 'react'
import moment from 'moment'

import NumberFormat from 'react-number-format'
import { FavouriteIcon } from '../../ui/icons/FavouriteIcon/FavouriteIcon'
import { HouseIcon } from '../../ui/icons/HouseIcon/HouseIcon'
import { StarsIndicator } from '../StarsIndicator/StarsIndicator'

import s from './HotelItem.module.scss'
// eslint-disable-next-line
export const HotelItem = ({ style, showIcon, hotel, toggleFav }) => {
  const daysNumber = moment
    .duration(
      moment(hotel.check.checkOut).diff(moment(hotel.check.checkIn), 'days'),
      'days'
    )
    .humanize()
  const checkInDate = moment(hotel.check.checkIn).format('LL')
  return (
    <div style={style} className={s.wrapper}>
      {showIcon && <HouseIcon style={{ marginRight: '24px' }} />}
      <div className={s.infoWrapper}>
        <div className={s.titleWrap}>
          <span className={s.title}>{hotel.hotelName}</span>
          <FavouriteIcon onClick={toggleFav} />
        </div>
        <div className={s.dateWrap}>
          <span className={s.date}>
            {checkInDate.slice(0, checkInDate.length - 3)}
          </span>
          <span className={s.days}>
            {daysNumber === 'день' ? '1 день' : daysNumber}
          </span>
        </div>
        <div className={s.levelWrap}>
          <StarsIndicator countStars={hotel.stars} />
          <div className={s.priceWrap}>
            <span className={s.price}>Price:</span>
            <NumberFormat
              displayType={'text'}
              value={hotel.priceAvg.toFixed()}
              thousandSeparator={' '}
              renderText={(text) => (
                <span className={s.priceValue}>{text} ₽</span>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
