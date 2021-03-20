import * as actionTypes from '../actions/hotelsActions'

const initialState = {
  hotels: [],
  favourites: [],
}

export const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_HOTELS:
      return { ...state, hotels: action.hotels }
    case actionTypes.SELECT_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.find(
          (h) => h.hotelId === action.hotel.hotelId
        )
          ? [...state.favourites]
          : [...state.favourites, action.hotel],
      }
    case actionTypes.UNSELECT_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(
          (f) => f.hotelId !== action.hotelId
        ),
      }
    default:
      return state
  }
}
