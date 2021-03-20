export const SET_HOTELS = 'hotels/SET_HOTELS'
export const TOGGLE_FAVOURITE = 'hotels/TOGGLE_FAVOURITE'
export const GET_HOTELS = 'hotels/GET_HOTELS'

// eslint-disable-next-line
export const getHotels = (checkIn, checkOut, location) => ({ type: GET_HOTELS, checkIn, checkOut, location })

export const setHotels = (hotels) => ({ type: SET_HOTELS, hotels })
export const toggleFavourite = (hotel) => ({ type: TOGGLE_FAVOURITE, hotel })
// eslint-disable-next-line
export const unselectFavourite = (hotelId) => ({ type: UNSELECT_FAVOURITE, hotelId })
