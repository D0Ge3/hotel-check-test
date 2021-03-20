import React from 'react'
import Slider from 'react-slick'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'
import moment from 'moment'

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { HotelsList } from '../HotelsList/HotelsList'
import { CustomScrollbars } from '../../ui/CustomScrollbars/CustomScrollbars'

import s from './HotelsWrapper.module.scss'

export const HotelsWrapper = () => {
  const settings = {
    initialSlide: 0,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    infinite: false,
  }

  const hotels = useSelector((state) => state.hotels.hotels)
  const countFav = useSelector((state) => state.hotels.favourites.length)
  const imgs = useSelector((state) => state.hotels.imgs)
  const filters = useSelector((state) => state.hotels.filters)
  const checkInDate = moment(filters.checkIn).format('LL')

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Breadcrumbs city={filters.location} />
        <span className={s.date}>
          {checkInDate.slice(0, checkInDate.length - 3)}
        </span>
      </div>
      <Slider className={s.carousel} {...settings}>
        {imgs.map((img) => (
          <div key={nanoid()} className={s.imgWrap}>
            <img className={s.img} src={img} alt="фото" />
          </div>
        ))}
      </Slider>
      <span className={s.favouriteCount}>
        Добавлено в Избранное: <b className={s.countValue}>{countFav}</b> отеля
      </span>
      <CustomScrollbars style={{ height: '529px' }}>
        <div className={s.listWrap}>
          <HotelsList hotels={hotels} showIcon />
        </div>
      </CustomScrollbars>
    </div>
  )
}
