export const setActiveFilter = active => dispatch => {
    dispatch({
      type: 'SET_ACTIVE_FILTER',
      payload: active
    })
  }