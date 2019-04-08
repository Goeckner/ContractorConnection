import { combineReducers } from 'redux'

export const classList = (state = [], action) => {
  switch ( action.type ) {
    case 'SET_CLASS_LIST':
      return action.payload
    default:
      return state
  }
}

export const activeClassList = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CLASS_LIST':
      return action.payload
    default:
      return state
  }
}

export const isInstructor = (state = false, action) => {
  switch ( action.type ) {
    case 'SET_IS_INSTRUCTOR':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  classList,
  isInstructor,
  activeClassList,
})
