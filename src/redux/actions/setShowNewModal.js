export const setShowNewModal = shown => dispatch => {
    dispatch({
      type: 'SET_SHOW_NEW_MODAL',
      payload: shown
    })
  }