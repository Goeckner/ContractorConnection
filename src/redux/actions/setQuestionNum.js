export const setQuestionNum = questionNum => dispatch => {
    dispatch({
      type: 'SET_QUESTION_NUM',
      payload: questionNum
    })
  }