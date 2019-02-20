import { combineReducers } from 'redux'
import { activePage } from './activePageReducer'
import searchPage from './searchPageReducer'
import signUp from './signUpReducer'
import trainingPage from './trainingPageReducer'

export default combineReducers({
  activePage,
  searchPage,
  signUp,
  trainingPage
})
