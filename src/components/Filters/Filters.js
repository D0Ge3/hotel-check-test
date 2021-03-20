import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { TextField } from '../../ui/TextField/TextField'
import { Button } from '../../ui/Button/Button'
import { DateField } from '../../ui/DateField/DateField'

import { getHotels } from '../../redux/actions/hotelsActions'

import s from './Filters.module.scss'

export const Filters = () => {
  const dispatch = useDispatch()
  const labelStyle = { color: '#424242', fontWeight: 500 }
  const [checkIn, setCheckIn] = useState(new Date())
  const [daysNumber, setDaysNumber] = useState(1)
  const [location, setLocation] = useState('Москва')
  useEffect(() => {
    loadHotels('2021-03-20', '2021-03-21', 'Москва')
    // eslint-disable-next-line
  }, [])

  const loadHotels = (checkIn, checkOut, location) => {
    dispatch(getHotels(checkIn, checkOut, location))
  }
  const submiHandler = (e) => {
    e.preventDefault()
    const checkInFormatted = moment(checkIn).format('YYYY-MM-DD')
    const checkOutFormatted = moment(checkIn)
      .add(daysNumber, 'd')
      .format('YYYY-MM-DD')

    loadHotels(checkInFormatted, checkOutFormatted, location)
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
          minDate={new Date()}
          showDisabledMonthNavigation
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
