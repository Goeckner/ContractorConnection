export const setShortDesc = snum => dispatch => {
    dispatch({
      type: 'SET_SHORT_DESC',
      payload: snum
    })
  }