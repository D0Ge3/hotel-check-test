import React, { useState } from 'react'
import moment from 'moment'

import { TextField } from '../../ui/TextField/TextField'
import { Button } from '../../ui/Button/Button'

import s from './Filters.module.scss'
import { DateField } from '../../ui/DateField/DateField'

export const Filters = () => {
  const labelStyle = { color: '#424242', fontWeight: 500 }
  const [checkIn, setCheckIn] = useState(new Date())
  const [daysNumber, setDaysNumber] = useState(1)
  const [location, setLocation] = useState('Москва')

  const submiHandler = (e) => {
    e.preventDefault()
    console.log(`checkIn=${moment(checkIn).format('l')}`)
    console.log(`checkOut=${moment(checkIn).add(daysNumber, 'd').format('l')}`)
  }
  return (
    <div className={s.wrapper}>
      <form onSubmit={submiHandler} className={s.form}>
        <TextField
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          labelStyle={labelStyle}
          name="location"
          label="Локация"
        />
        <DateField
          label="Дата заселения"
          labelStyle={labelStyle}
          name="appointmentDate"
          onChange={(value) => setCheckIn(value)}
          value={checkIn}
        />
        <TextField
          value={daysNumber}
          onChange={(e) => setDaysNumber(e.target.value)}
          labelStyle={labelStyle}
          name="daysCount"
          label="Количество дней"
        />
        <Button
          text="Показать"
          type="submit"
          style={{ width: '100%', height: '50px' }}
        />
      </form>
    </div>
  )
}
