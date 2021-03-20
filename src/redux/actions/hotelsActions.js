export const SET_HOTELS = 'hotels/SET_HOTELS'
export const SELECT_FAVOURITE = 'hotels/SELECT_FAVOURITE'
export const UNSELECT_FAVOURITE = 'hotels/UNSELECT_FAVOURITE'

export const setHotels = (hotels) => ({ type: SET_HOTELS, hotels })
export const selectFavourite = (hotel) => ({ type: SELECT_FAVOURITE, hotel })
export const unselectFavourite = (hotelId) => ({ type: UNSELECT_FAVOURITE, hotelId })
