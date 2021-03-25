import { nanoid } from 'nanoid'
import * as actionTypes from '../actions/hotelsActions'

import img1 from '../../img/carousel/1.jpg'
import img2 from '../../img/carousel/2.jpg'
import img3 from '../../img/carousel/3.jpg'
import img4 from '../../img/carousel/4.jpg'

const initialState = {
  hotels: [],
  favourites: [],
  filters: {},
  imgs: [
    { id: nanoid(), img: img1 },
    { id: nanoid(), img: img2 },
    { id: nanoid(), img: img3 },
    { id: nanoid(), img: img4 },
  ],
}

export const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_HOTELS:
      return { ...state, hotels: action.hotels }
    case actionTypes.TOGGLE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.find((h) => h.id === action.hotel.id)
          ? state.favourites.filter((f) => f.id !== action.hotel.id)
          : [...state.favourites, action.hotel],
      }
    case actionTypes.SET_FILTERS:
      return { ...state, filters: action.filters }
    default:
      return state
  }
}
