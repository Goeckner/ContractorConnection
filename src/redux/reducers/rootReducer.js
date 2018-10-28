import { combineReducers } from 'redux'
import { activePage } from './activePageReducer'
import searchPage from './searchPageReducer'

export default combineReducers({
  activePage,
  instructors: searchPage
})
