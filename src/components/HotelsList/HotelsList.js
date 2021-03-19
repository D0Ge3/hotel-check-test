import React from 'react'
import { HotelItem } from '../HotelItem/HotelItem'

export const HotelsList = ({ showIcon }) => {
  return (
    <div>
      <HotelItem style={{ marginTop: '16px'}} showIcon={showIcon} />
      <HotelItem style={{ marginTop: '16px'}} showIcon={showIcon} />
      <HotelItem style={{ marginTop: '16px'}} showIcon={showIcon} />
    </div>
  )
}
