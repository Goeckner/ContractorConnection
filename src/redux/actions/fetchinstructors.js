export const setInstructorList = instructors => dispatch => {
    dispatch({
      type: 'SET_INSTRUCTOR_LIST',
      payload: instructors
    })
  }
  
  export default {
    ...setInstructorList
  }
  