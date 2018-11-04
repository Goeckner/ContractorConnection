export const setCoordinates = coordinates => dispatch => {
    dispatch({
      type: 'SET_COORDINATES',
      payload: coordinates
    })
  }