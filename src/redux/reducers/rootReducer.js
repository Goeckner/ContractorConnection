import { combineReducers } from 'redux'
import { activePage } from './activePageReducer'
import searchPage from './searchPageReducer'
import { classList } from './signUpReducer'

export default combineReducers({
  activePage,
  instructors: searchPage,
  classList,
})
