import * as actionTypes from '../actions/appActions'

const initialState = {
  isAuth: false,
  isLoading: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH:
      return { ...state, isAuth: action.isAuth }
    case actionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}
