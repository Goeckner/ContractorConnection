export const setActivePage = page => dispatch => {
  dispatch({
    type: 'SET_ACTIVE_PAGE',
    payload: page
  })
}

export default {
  ...setActivePage
}
