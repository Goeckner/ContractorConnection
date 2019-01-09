export const setShowInstructor = showi => dispatch => {
    dispatch({
      type: 'SET_SHOW_INSTRUCTOR',
      payload: showi
    })
  }