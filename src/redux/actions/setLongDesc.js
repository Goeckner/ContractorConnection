export const setLongDesc = lnum => dispatch => {
    dispatch({
      type: 'SET_LONG_DESC',
      payload: lnum
    })
  }