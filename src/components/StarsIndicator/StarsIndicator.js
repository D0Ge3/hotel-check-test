import React from 'react'
import { nanoid } from 'nanoid'

import { StarIcon } from '../../ui/icons/StarIcon/StarIcon'

import s from './StarsIndicator.module.scss'

export const StarsIndicator = ({ countStars = 0 }) => {
  const stars = [
    ...Array(countStars).fill(true),
    ...Array(5 - countStars).fill(false),
  ]
  const starsArr = stars.map((s) => <StarIcon key={nanoid()} isActive={s} />)
  return <div className={s.wrapper}>{starsArr}</div>
}
