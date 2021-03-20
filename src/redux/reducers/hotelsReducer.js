import * as actionTypes from '../actions/hotelsActions'

const initialState = {
  hotels: [],
  favourites: [],
}

export const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_HOTELS:
      return { ...state, hotels: action.hotels }
    case actionTypes.TOGGLE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.find(
          (h) => h.hotelId === action.hotel.hotelId
        )
          ? state.favourites.filter((f) => f.hotelId !== action.hotel.hotelId)
          : [...state.favourites, action.hotel],
      }
    default:
      return state
  }
}
