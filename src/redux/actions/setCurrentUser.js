export const setCurrentUser = user => dispatch => {
    dispatch({
      type: 'SET_CURRENT_USER',
      payload: user
    })
  }
  
  export default {
    ...setCurrentUser
  }
  