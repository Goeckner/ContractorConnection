import { combineReducers } from "redux";

const instructors = [
    {name: 'Jerry Smith', email: 'siue@hello.com', location: '4630 Brookview Drive', company: 'Guns r Us'},
    {name: 'Penny Hanson', email: 'Example@fake.com', location: '1547 Weber Drive', company: 'Guns r Us'},
    {name: 'John Smith', email: 'maybe@google.com', location: '770 Puma Blvd', company: 'Walmart'},
    {name: 'Mary johnson', email: 'Example@comcast.com', location: 'White House', company: 'Guns r Us'},
    {name: 'Michael Morgan', email: 'Example@fake.org', location: 'Busch Stadium', company: 'Guns r Us'},
    {name: 'John Smith', email: 'brad@real.com', location: '61 Circle Drive', company: 'Gap'},
    {name: 'Abbie Smith', email: 'kim@tim.com', location: 'Glen Carbon', company: 'Apple'},
    {name: 'Michael Patrick', email: 'Landon@fake.com', location: 'Troy', company: 'Guns r Us'},
    {name: 'Jim Jones', email: 'me@siue.com', location: 'New York', company: 'Guns r Us'},
    {name: 'John Smith', email: 'Example@fake.com', location: 'Edwardsville', company: 'Guns r Us'}
]

var defaultCoordinates = {
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

  export const Address = (state = "United States", action) => {
    switch ( action.type ) {
      case 'SET_MAP_ADDRESS':
        return action.payload
      default:
        return state
    }
  }
  
  export default combineReducers({
    instructorList,
    Coordinates,
    SearchCriteria,
    Address
  })