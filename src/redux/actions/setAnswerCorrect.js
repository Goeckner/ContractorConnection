export const setAnswerCorrect = answerCorrect => dispatch => {
    dispatch({
      type: 'SET_ANSWER_CORRECT',
      payload: answerCorrect
    })
  }