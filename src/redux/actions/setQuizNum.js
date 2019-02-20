export const setQuizNum = quizNum => dispatch => {
    dispatch({
      type: 'SET_QUIZ_NUM',
      payload: quizNum
    })
  }