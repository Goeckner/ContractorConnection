import { combineReducers } from "redux";

const instructors = [
    {name: 'John Smith', email: 'Example@fake.com', location: 'Edwardsville', company: 'Guns r Us'},
    {name: 'John Smith', email: 'Example@fake.com', location: 'Edwardsville', company: 'Guns r Us'},
    {name: 'John Smith', email: 'Example@fake.com', location: 'Edwardsville', company: 'Guns r Us'},
    {name: 'John Smith', email: 'Example@fake.com', location: 'Edwardsville', company: 'Guns r Us'},
    {name: 'John Smith', email: 'Example@fake.com', location: 'Edwardsville', company: 'Guns r Us'},
    {name: 'John Smith', email: 'Example@fake.com', location: 'Edwardsville', company: 'Guns r Us'},
    {name: 'John Smith', email: 'Example@fake.com', location: 'Edwardsville', company: 'Guns r Us'},
    {name: 'John Smith', email: 'Example@fake.com', location: 'Edwardsville', company: 'Guns r Us'},
    {name: 'John Smith', email: 'Example@fake.com', location: 'Edwardsville', company: 'Guns r Us'},
    {name: 'John Smith', email: 'Example@fake.com', location: 'Edwardsville', company: 'Guns r Us'}
]

const defaultCoordinates = {
  center: {
    lat: 41.850033,
    lng: -96.6500523
  },
  zoom: 3
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
    Coordinates
  })