import React from 'react'
import { HotelItem } from '../HotelItem/HotelItem'
import { useDispatch } from 'react-redux'
import { toggleFavourite } from '../../redux/actions/hotelsActions'

export const HotelsList = ({ showIcon, hotels }) => {
  const dispatch = useDispatch()
  const hotelsItems = hotels.map((hotel) => (
    <HotelItem
      key={hotel.hotelId}
      hotel={hotel}
      style={{ marginTop: '16px' }}
      showIcon={showIcon}
      toggleFav={() => dispatch(toggleFavourite(hotel))}
    />
  ))
  return (
    <div>
      {hotelsItems}
      {/* <HotelItem style={{ marginTop: '16px' }} showIcon={showIcon} />
      <HotelItem style={{ marginTop: '16px' }} showIcon={showIcon} />
      <HotelItem style={{ marginTop: '16px' }} showIcon={showIcon} /> */}
    </div>
  )
}
