import React from 'react'

import { TextField } from '../../ui/TextField/TextField'
import { Button } from '../../ui/Button/Button'

import s from './Filters.module.scss'

export const Filters = () => {
  const labelStyle = { color: '#424242', fontWeight: 500 }
  return (
    <div className={s.wrapper}>
      <form className={s.form}>
        <TextField labelStyle={labelStyle} name="location" label="Локация" />
        <TextField
          labelStyle={labelStyle}
          name="appointmentDate"
          type="date"
          label="Дата заселения"
        />
        <TextField
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