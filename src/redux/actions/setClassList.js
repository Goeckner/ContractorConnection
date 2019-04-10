export const setClassList = classes => dispatch => {
    dispatch({
      type: 'SET_CLASS_LIST',
      payload: classes
    })
  }
  
  export default {
    ...setClassList
  }
  