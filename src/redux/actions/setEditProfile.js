export const setEditProfile = edit => dispatch => {
    dispatch({
      type: 'SET_EDIT_PROFILE',
      payload: edit
    })
  }