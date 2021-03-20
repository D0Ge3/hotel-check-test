import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { CustomScrollbars } from '../../ui/CustomScrollbars/CustomScrollbars'
import { SortingBtn } from '../../ui/SortingBtn/SortingBtn'
import { HotelsList } from '../HotelsList/HotelsList'

import s from './Favourites.module.scss'

export const Favourites = () => {
  let favHotels = useSelector((state) => state.hotels.favourites)

  const [starsSortMode, setStarsSortMode] = useState(null)
  const [priceSortMode, setPriceSortMode] = useState(null)
  const [sortedHotels, setSortedHotels] = useState([])
  useEffect(() => {
    setSortedHotels(favHotels)
  }, [favHotels])
  const changeMode = (field) => {
    const hotels = favHotels
    if (field === 'stars') {
      if (!starsSortMode) {
        setStarsSortMode('down')
        setSortedHotels([...hotels].sort((a, b) => a.stars - b.stars))
      } else if (starsSortMode === 'down') {
        setStarsSortMode('up')
        setSortedHotels([...hotels].sort((a, b) => b.stars - a.stars))
      } else if (starsSortMode === 'up') {
        setStarsSortMode(null)
        setSortedHotels(favHotels)
      }
    } else if (field === 'price') {
      if (!priceSortMode) {
        setPriceSortMode('down')
        setSortedHotels([...hotels].sort((a, b) => a.priceAvg - b.priceAvg))
      } else if (priceSortMode === 'down') {
        setPriceSortMode('up')
        setSortedHotels([...hotels].sort((a, b) => b.priceAvg - a.priceAvg))
      } else if (priceSortMode === 'up') {
        setPriceSortMode(null)
        setSortedHotels(favHotels)
      }
    }
  }

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Избранное</h3>
      <div className={s.sortWrapper}>
        <SortingBtn
          text="Рейтинг"
          style={{ marginRight: '9px' }}
          sortMode={starsSortMode}
          onClick={() => changeMode('stars')}
        />
        <SortingBtn
          text="Цена"
          sortMode={priceSortMode}
          onClick={() => changeMode('price')}
        />
      </div>
      <CustomScrollbars style={{ height: '290px' }}>
        <div className={s.listWrapper}>
          <HotelsList hotels={sortedHotels} />
        </div>
      </CustomScrollbars>
    </div>
  )
}
