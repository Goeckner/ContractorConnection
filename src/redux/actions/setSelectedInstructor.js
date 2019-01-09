export const setSelectedInstructor = selected => dispatch => {
    dispatch({
      type: 'SET_SELECTED_INSTRUCTOR',
      payload: selected
    })
  }