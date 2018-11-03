import { combineReducers } from "redux";

const instructors = [
    {name: 'Jerry Smith', email: 'siue@hello.com', location: 'Auburn', company: 'Guns r Us'},
    {name: 'Penny Hanson', email: 'Example@fake.com', location: 'Edwardsville', company: 'Guns r Us'},
    {name: 'John Smith', email: 'maybe@google.com', location: 'Edwardsville', company: 'Walmart'},
    {name: 'Mary johnson', email: 'Example@comcast.com', location: 'Edwardsville', company: 'Guns r Us'},
    {name: 'Michael Cox', email: 'Example@fake.org', location: 'St. Louis', company: 'Guns r Us'},
    {name: 'John Smith', email: 'brad@real.com', location: 'Edwardsville', company: 'Gap'},
    {name: 'John Smith', email: 'kim@tim.com', location: 'Edwardsville', company: 'Apple'},
    {name: 'Michael Hunt', email: 'Landon@fake.com', location: 'Edwardsville', company: 'Guns r Us'},
    {name: 'Jim Jones', email: 'me@siue.com', location: 'Edwardsville', company: 'Guns r Us'},
    {name: 'John Smith', email: 'Example@fake.com', location: 'Edwardsville', company: 'Guns r Us'}
]

const defaultCoordinates = {
  center: {
    lat: 41.850033,
    lng: -96.6500523
  },
  zoom: 3
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

export const instructorList = (state = instructors, action) => {
    switch ( action.type ) {
      case 'SET_INSTRUCTOR_LIST':
        return action.payload
      default:
        return state
    }
  }
  
  export default combineReducers({
    instructorList,
    Coordinates,
    SearchCriteria
  })