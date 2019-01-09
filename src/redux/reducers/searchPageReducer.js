import { combineReducers } from "redux";

const instructors = [
    {id: 1, name: 'Dennis Ritchie', email: 'DRitchie@unix.c', location: 'Boston', company: 'Guns r Us', lat: 42.3600825, lng: -71.05888801},
    {id: 2, name: 'Penny Hanson', email: 'Example@fake.com', location: 'Central Park, New York', company: 'Guns r Us', lat: 40.7828647, lng: -73.9653551},
    {id: 3, name: 'John Smith', email: 'maybe@google.com', location: '770 Puma Blvd', company: 'Walmart', lat: 38.8029004, lng: -90.0110577},
    {id: 4, name: 'Mary johnson', email: 'Example@comcast.com', location: 'White House', company: 'Guns r Us', lat: 38.8976763, lng: -77.0365298},
    {id: 5, name: 'Michael Morgan', email: 'Example@fake.org', location: 'Busch Stadium', company: 'Guns r Us', lat: 38.6226188, lng: -90.1928209},
    {id: 6, name: 'John Smith', email: 'brad@real.com', location: '61 Circle Drive Edwardsville', company: 'Gap', lat: 38.7925599, lng: -90.00304190000001},
    {id: 7, name: 'Abbie Smith', email: 'kim@tim.com', location: 'Glen Carbon', company: 'Apple', lat: 38.7483814, lng: -89.9831579999999},
    {id: 8, name: 'Michael Patrick', email: 'Landon@fake.com', location: 'Troy, Illinois', company: 'Guns r Us', lat: 38.7292147, lng: -89.8831541},
    {id: 9, name: 'Jim Jones', email: 'me@siue.com', location: 'New York', company: 'Guns r Us', lat: 40.7127753, lng: -74.0059728},
    {id: 10, name: 'John Kelly', email: 'Kelly@outlook.com', location: 'Austin, Texas', company: 'Guns r Us', lat: 30.267153, lng: -97.7430608},
    {id: 11, name: 'James Bond', email: 'JBond@MI6.uk', location: 'London', company: 'MI6', lat: 51.5073509, lng: -0.1277583},
    {id: 12, name: 'Patrick Brown', email: 'PBrown@fbi.gov', location: 'Pentagon', company: 'CIA', lat: 38.8718568, lng: -77.0562669},
    {id: 13, name: 'Tyler Richards', email: 'TRich@yahoo.com', location: 'Los Angeles', company: 'The Dodgers', lat: 34.0522342, lng: -118.2436849},
    {id: 14, name: 'Michael Morrison', email: 'me@mm.com', location: 'Washington Monument', company: 'NRA', lat: 38.8894838, lng: -77.0352791},
    {id: 15, name: 'Samuel Adams', email: 'freedom@usa.gov', location: 'St. Louis', company: 'Founding Fathers', lat: 38.6270025, lng: -90.19940419999999},
    {id: 16, name: 'John Adams', email: 'ja@real.com', location: '61 Circle Drive Edwardsville', company: 'Gap', lat: 38.7925599, lng: -90.00304190000001},
    {id: 17, name: 'Ronald Swanson', email: 'null@null.org', location: 'Pawnee, Illinois', company: 'Parks and Recreation', lat: 39.5917186, lng: -89.58037390000001},
    {id: 18, name: 'Michael Scott', email: 'MScott@DunderMifflin.com', location: 'Scranton, Pennsylvania', company: 'Guns r Us', lat: 41.408969, lng: -75.66241219999999},
    {id: 19, name: 'Bill Gates', email: 'BGates@windows.com', location: 'Seattle, Washington', company: 'Microsoft', lat: 47.6062095, lng: -122.3320708},
    {id: 20, name: 'Steve Jobs', email: 'sj@apple.com', location: 'Seattle, Washington', company: 'Apple', lat: 47.6062095, lng: -122.3320708}
]

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

export const instructorList = (state = instructors, action) => {
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
  
  export default combineReducers({
    instructorList,
    Coordinates,
    SearchCriteria,
    Address,
    showFilter,
    tempFilter,
    activeFilter,
    showInstructor,
    selectedInstructor
  })