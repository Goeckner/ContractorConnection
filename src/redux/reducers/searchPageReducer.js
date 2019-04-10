import { combineReducers } from "redux";

const defaultFilter = {
  distance: "No Max",
  location: "",
  rating: 0
}

var defaultCoordinates = {
  center: {
    lat: 38.7931,
    lng: -90.001
  },
  zoom: 15
}

export const SearchCriteria = (state = "", action) => {
  switch ( action.type ) {
    case 'SET_SEARCH':
      return action.payload
    default:
      return state
  }
}

export const Coordinates = (state = defaultCoordinates, action) => {
  switch ( action.type ) {
    case 'SET_COORDINATES':
      return action.payload
    default:
      return state
  }
}

export const instructorList = (state = [], action) => {
    switch ( action.type ) {
      case 'SET_INSTRUCTOR_LIST':
        return action.payload
      default:
        return state
    }
  }

  export const Address = (state = "61 Circle Drive", action) => {
    switch ( action.type ) {
      case 'SET_MAP_ADDRESS':
        return action.payload
      default:
        return state
    }
  }

  export const showFilter = (state = false, action) => 
  {
    switch (action.type) {
      case 'SET_SHOW_FILTER':
        return action.payload
      default:
        return state
    }
  }

  export const tempFilter = (state = defaultFilter, action) =>
  {
    switch (action.type) {
      case 'SET_TEMP_FILTER':
        return action.payload
      default:
        return state
    }
  }

  export const activeFilter = (state = defaultFilter, action) =>
  {
    switch (action.type) {
      case 'SET_ACTIVE_FILTER':
        return action.payload
      default:
        return state
    }
  }

  export const showInstructor = (state = false, action) => 
  {
    switch (action.type) {
      case 'SET_SHOW_INSTRUCTOR':
        return action.payload
      default:
        return state
    }
  }

  export const selectedInstructor = (state = -1, action) =>
  {
    switch (action.type) {
      case 'SET_SELECTED_INSTRUCTOR':
        return action.payload
      default:
        return state
    }
  }

  export const instructorsLoaded = (state = false, action) =>
  {
    switch (action.type) {
      case 'SET_INSTRUCTORS_LOADED':
        return action.payload
      default:
        return state
    }
  }

  export const classes = (state = null, action) =>
  {
    switch (action.type) {
      case 'SET_CLASS_LIST':
        return action.payload
      default:
        return state
    }
  }
  
  export default combineReducers({
    instructorList,
    Coordinates,
    SearchCriteria,
    Address,
    showFilter,
    tempFilter,
    activeFilter,
    showInstructor,
    selectedInstructor,
    classes
  })