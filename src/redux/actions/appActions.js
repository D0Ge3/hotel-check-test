export const SET_AUTH = 'app/SET_AUTH'
export const SET_IS_LOADING = 'app/SET_IS_LOADING'
export const LOGIN = 'app/LOGIN'
export const LOGOUT = 'app/LOGOUT'

export const setAuth = (isAuth) => ({ type: SET_AUTH, isAuth })
export const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, isLoading })
export const login = (login, password) => ({ type: LOGIN, login, password })
export const logout = () => ({ type: LOGOUT })
