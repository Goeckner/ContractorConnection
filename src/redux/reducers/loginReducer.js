import { combineReducers } from "redux";

export const showLogin = (state = false, action) => 
  {
    switch (action.type) {
      case 'SET_SHOW_LOGIN':
        return action.payload
      default:
        return state
    }
  }

export const currentuser = (state = null, action) => 
  {
    switch(action.type) {
      case 'SET_CURRENT_USER':
        return action.payload
      default:
        return state
    }
  }

  export default combineReducers({
    showLogin,
    currentuser
  })