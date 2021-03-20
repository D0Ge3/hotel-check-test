import * as axios from 'axios'

export const hotelsApi = {
  getHotels(checkIn, checkOut, location) {
    return axios
      .get(
        `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=100`
      )
      .then((res) => res)
  },
}
