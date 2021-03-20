export const SET_HOTELS = 'hotels/SET_HOTELS'
export const TOGGLE_FAVOURITE = 'hotels/TOGGLE_FAVOURITE'
export const GET_HOTELS = 'hotels/GET_HOTELS'
export const SET_FILTERS = 'hotels/SET_FILTERS'

// eslint-disable-next-line
export const getHotels = (checkIn, checkOut, location) => ({ type: GET_HOTELS, checkIn, checkOut, location })

export const setHotels = (hotels) => ({ type: SET_HOTELS, hotels })
export const toggleFavourite = (hotel) => ({ type: TOGGLE_FAVOURITE, hotel })

export const setFilters = (filters) => ({ type: SET_FILTERS, filters })
