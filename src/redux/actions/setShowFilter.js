export const setShowFilter = show => dispatch => {
    dispatch({
      type: 'SET_SHOW_FILTER',
      payload: show
    })
  }