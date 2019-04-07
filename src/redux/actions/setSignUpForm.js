export const setSignUpForm = signup => dispatch => {
    dispatch({
      type: 'SET_SIGN_UP_FORM',
      payload: signup
    })
  }