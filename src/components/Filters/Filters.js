import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { TextField } from '../../ui/TextField/TextField'
import { Button } from '../../ui/Button/Button'
import { DateField } from '../../ui/DateField/DateField'

import { getHotels } from '../../redux/actions/hotelsActions'

import s from './Filters.module.scss'

const FiltersSchema = Yup.object().shape({
  location: Yup.string().required('Обязательное поле!'),
  checkIn: Yup.date()
    .required('Обязательное поле!')
    .typeError('Поле должно содержать дату!'),
  daysNumber: Yup.number().required('Обязательное поле!'),
})

export const Filters = () => {
  const dispatch = useDispatch()
  const labelStyle = { color: '#424242', fontWeight: 500 }
  const formik = useFormik({
    initialValues: {
      checkIn: new Date(),
      daysNumber: 1,
      location: 'Москва',
    },
    validationSchema: FiltersSchema,
    onSubmit: (values) => {
      const { checkIn, daysNumber, location } = values
      const checkInFormatted = moment(checkIn).format('YYYY-MM-DD')
      const checkOutFormatted = moment(checkIn)
        .add(daysNumber, 'd')
        .format('YYYY-MM-DD')
      loadHotels(checkInFormatted, checkOutFormatted, location)
    },
  })
  useEffect(() => {
    loadHotels('2021-03-20', '2021-03-21', 'Москва')
    // eslint-disable-next-line
  }, [])

  const loadHotels = (checkIn, checkOut, location) => {
    dispatch(getHotels(checkIn, checkOut, location))
  }
  const { errors, touched } = formik
  return (
    <div className={s.wrapper}>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <TextField
          value={formik.values.location}
          onChange={formik.handleChange}
          labelStyle={labelStyle}
          name="location"
          label="Локация"
          error={touched.location && errors.location}
        />
        <DateField
          label="Дата заселения"
          labelStyle={labelStyle}
          name="checkIn"
          onChange={(value) => formik.setFieldValue('checkIn', value)}
          value={formik.values.checkIn}
          minDate={new Date()}
          showDisabledMonthNavigation
          error={touched.checkIn && errors.checkIn}
        />
        <TextField
          value={formik.values.daysNumber}
          onChange={formik.handleChange}
          labelStyle={labelStyle}
          name="daysNumber"
          label="Количество дней"
          error={touched.daysNumber && errors.daysNumber}
        />
        <Button
          text="Найти"
          type="submit"
          style={{ width: '100%', height: '50px' }}
        />
      </form>
    </div>
  )
}
