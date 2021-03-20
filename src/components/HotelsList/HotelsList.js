import React from 'react'
import { HotelItem } from '../HotelItem/HotelItem'

export const HotelsList = ({ showIcon, hotels }) => {
  const hotelsItems = hotels.map((hotel) => (
    <HotelItem
      key={hotel.hotelId}
      hotel={hotel}
      style={{ marginTop: '16px' }}
      showIcon={showIcon}
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
