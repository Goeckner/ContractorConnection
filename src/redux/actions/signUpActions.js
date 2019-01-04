export const setClassList = classes => dispatch => {
  dispatch({
    type: 'SET_CLASS_LIST',
    payload: classes,
  })
}

export const setIsInstructor = bool => dispatch => {
  dispatch({
    type: 'SET_IS_INSTRUCTOR',
    payload: bool,
  })
}

export default {
  ...setClassList,
  ...setIsInstructor,
}
