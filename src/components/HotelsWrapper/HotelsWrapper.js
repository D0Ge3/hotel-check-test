import React from 'react'
import Slider from 'react-slick'

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { HotelsList } from '../HotelsList/HotelsList'
import Scrollbars from 'react-custom-scrollbars'

import s from './HotelsWrapper.module.scss'

import img1 from '../../img/carousel/1.jpg'
import img2 from '../../img/carousel/2.jpg'
import img3 from '../../img/carousel/3.jpg'
import img4 from '../../img/carousel/4.jpg'

export const HotelsWrapper = () => {
  const settings = {
    initialSlide: 0,
    // speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    infinite: false,
  }
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Breadcrumbs city="Москва" />
        <span className={s.date}>07 июля 2020</span>
      </div>
      <Slider className={s.carousel} {...settings}>
        <div className={s.imgWrap}>
          <img className={s.img} src={img1} alt=""/>
        </div>
        <div className={s.imgWrap}>
          <img className={s.img} src={img2} alt=""/>
        </div>
        <div className={s.imgWrap}>
          <img className={s.img} src={img3} alt=""/>
        </div>
        <div style={{ marginRight: 0 }} className={s.imgWrap}>
          <img className={s.img} src={img4} alt=""/>
        </div>
      </Slider>
      <span className={s.favouriteCount}>
        Добавлено в Избранное: <b>3</b> отеля
      </span>
      <Scrollbars style={{ height: '529px' }}>
        <div style={{ width: '584px' }}>
          <HotelsList showIcon />
          <HotelsList showIcon />
          <HotelsList showIcon />
        </div>
      </Scrollbars>
    </div>
  )
}
