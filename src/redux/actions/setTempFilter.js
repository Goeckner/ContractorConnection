export const setTempFilter = temp => dispatch => {
    dispatch({
      type: 'SET_TEMP_FILTER',
      payload: temp
    })
  }