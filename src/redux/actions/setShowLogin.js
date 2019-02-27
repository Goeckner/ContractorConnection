export const setShowLogin = showl => dispatch => {
    dispatch({
      type: 'SET_SHOW_LOGIN',
      payload: showl
    })
  }