import React from 'react'

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'

import s from './HotelsWrapper.module.scss'

export const HotelsWrapper = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Breadcrumbs city="Москва" />
        <span className={s.date}>07 июля 2020</span>
      </div>
    </div>
  )
}
