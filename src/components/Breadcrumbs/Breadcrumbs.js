import React from 'react'

import { BreadcrumbIcon } from '../BreadcrumbIcon/BreadcrumbIcon'

import s from './Breadcrumbs.module.scss'

export const Breadcrumbs = ({ city }) => {
  return (
    <div>
      <span className={s.item}>Отели</span>
      <BreadcrumbIcon style={{ margin: '0 20px' }} />
      <span className={s.item}>{city}</span>
    </div>
  )
}
