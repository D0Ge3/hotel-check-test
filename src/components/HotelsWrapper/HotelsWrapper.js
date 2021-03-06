import React from 'react'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import moment from 'moment'

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { HotelsList } from '../HotelsList/HotelsList'
import { CustomScrollbars } from '../../ui/CustomScrollbars/CustomScrollbars'

import s from './HotelsWrapper.module.scss'
import { Loader } from '../../ui/Loader/Loader'

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
  const isLoading = useSelector((state) => state.app.isLoading)
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
          <div key={img.id} className={s.imgWrap}>
            <img className={s.img} src={img.img} alt="фото" />
          </div>
        ))}
      </Slider>
      <span className={s.favouriteCount}>
        Добавлено в Избранное: <b className={s.countValue}>{countFav}</b> отеля
      </span>
      <CustomScrollbars style={{ height: '529px' }}>
        <div className={s.listWrap}>
          {isLoading ? (
            <Loader
              style={{ position: 'absolute', top: '214.5px', left: '257px' }}
            />
          ) : (
            <HotelsList hotels={hotels} showIcon />
          )}
        </div>
      </CustomScrollbars>
    </div>
  )
}
