import React from 'react'

import s from './HotelsWrapper.module.scss'
import { HotelItem } from '../HotelItem/HotelItem'

export const HotelsWrapper = () => {
  return (
    <div className={s.wrapper}>
      <HotelItem showIcon />
    </div>
  )
}