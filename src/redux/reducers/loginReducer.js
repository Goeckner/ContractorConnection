import { combineReducers } from "redux";

const defaultSignup = {
  address: "",
  city: "",
  state: "",
  phone: "",
  zipcode: "",
  company: "",
  fullDesc: ""
}

export const signUpForm = (state = defaultSignup, action) =>
{
  switch(action.type) {
    case 'SET_SIGN_UP_FORM':
      return action.payload
    default:
      return state
  }
}

export const showLogin = (state = false, action) => 
  {
    switch (action.type) {
      case 'SET_SHOW_LOGIN':
        return action.payload
      default:
        return state
    }
  }

export const showNewModal = (state = false, action) => 
  {
    switch (action.type) {
      case 'SET_SHOW_NEW_MODAL':
        return action.payload
      default:
        return state
    }
  }

export const currentUser = (state = null, action) => 
  {
    switch(action.type) {
      case 'SET_CURRENT_USER':
        return action.payload
      default:
        return state
    }
  }

export const editProfile = (state = false, action) =>
{
  switch(action.type) {
    case 'SET_EDIT_PROFILE':
      return action.payload
    default:
      return state
  }
}

export const shortDescLeft = (state = 512, action) =>
{
  switch(action.type) {
    case 'SET_SHORT_DESC':
      return action.payload
    default:
      return state
  }
}

export const longDescLeft = (state = 4096, action) =>
{
  switch(action.type) {
    case 'SET_LONG_DESC':
      return action.payload
    default:
      return state
  }
}

  export default combineReducers({
    showLogin,
    currentUser,
    showNewModal,
    editProfile,
    shortDescLeft,
    longDescLeft,
    signUpForm,
  })