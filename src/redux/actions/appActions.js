export const SET_AUTH = 'app/SET_AUTH'
export const SET_IS_LOADING = 'app/SET_IS_LOADING'

export const setAuth = (isAuth) => ({ type: SET_AUTH, isAuth })
export const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, isLoading })
