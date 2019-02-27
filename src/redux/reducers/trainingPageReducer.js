import { combineReducers } from 'redux'



const user = [
  {
    quizNum: 0, 
    questionNum: 0,
    answerCorrect: 0
  }
]


export const quizNum = (state = 0, action) =>
  {
    switch (action.type) {
      case 'SET_QUIZ_NUM':
        return action.payload
      default:
        return state
    }
  }

  export const questionNum = (state = 0, action) =>
  {
    switch (action.type) {
      case 'SET_QUESTION_NUM':
        return action.payload
      default:
        return state
    }
  }

  export const answerCorrect = (state = 0, action) =>
  {
    switch (action.type) {
      case 'SET_ANSWER_CORRECT':
        return action.payload
      default:
        return state
    }
  }

  export default combineReducers({
    quizNum,
    questionNum,
    answerCorrect
  })