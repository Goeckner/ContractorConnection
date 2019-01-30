import { combineReducers } from "redux";

const instructors = [
    {id: 1, name: 'Dennis Ritchie', email: 'DRitchie@unix.c', address: 'Boston', state: 'Massachusetts', company: 'Guns r Us', latitude: 42.3600825, longitude: -71.05888801},
    {id: 2, name: 'Penny Hanson', email: 'Example@fake.com', address: 'Central Park', state: 'New York', company: 'Guns r Us', latitude: 40.7828647, longitude: -73.9653551},
    {id: 3, name: 'John Smith', email: 'maybe@google.com', address: '770 Puma Blvd', state: 'Illinois', company: 'Walmart', latitude: 38.8029004, longitude: -90.0110577},
    {id: 4, name: 'Mary johnson', email: 'Example@comcast.com', address: 'White House', state: 'District of Columbia', company: 'Guns r Us', latitude: 38.8976763, longitude: -77.0365298},
    {id: 5, name: 'Michael Morgan', email: 'Example@fake.org', address: 'Busch Stadium', state: 'Missouri', company: 'Guns r Us', latitude: 38.6226188, longitude: -90.1928209},
    {id: 6, name: 'John Smith', email: 'brad@real.com', address: '61 Circle Drive Edwardsville', state: 'Illinois', company: 'Gap', latitude: 38.7925599, longitude: -90.00304190000001},
    {id: 7, name: 'Austin Smith', email: 'kim@tim.com', address: 'Glen Carbon', state: 'Illinois', company: 'Apple', latitude: 38.7483814, longitude: -89.9831579999999},
    {id: 8, name: 'Michael Patrick', email: 'Landon@fake.com', address: 'Troy', state: 'Illinois', company: 'Guns r Us', latitude: 38.7292147, longitude: -89.8831541},
    {id: 9, name: 'Jim Jones', email: 'me@siue.com', address: 'New York', state: 'New York', company: 'Guns r Us', latitude: 40.7127753, longitude: -74.0059728},
    {id: 10, name: 'Jeremy Kelly', email: 'Kelly@outlook.com', address: 'Austin', state: 'Texas', company: 'Guns r Us', latitude: 30.267153, longitude: -97.7430608},
    {id: 11, name: 'James Bond', email: 'JBond@MI6.uk', address: 'Springfiled', state: 'Illinois', company: 'MI6', latitude: 51.5073509, longitude: -0.1277583},
    {id: 12, name: 'Patrick Brown', email: 'PBrown@fbi.gov', address: 'Pentagon', state: 'Virginia', company: 'CIA', latitude: 38.8718568, longitude: -77.0562669},
    {id: 13, name: 'Tyler Richards', email: 'TRich@yahoo.com', address: 'Los Angeles', state: 'California', company: 'The Dodgers', latitude: 34.0522342, longitude: -118.2436849},
    {id: 14, name: 'Michael Morrison', email: 'me@mm.com', address: 'Washington Monument', state: 'District of Columbia', company: 'NRA', latitude: 38.8894838, longitude: -77.0352791},
    {id: 15, name: 'Samuel Adams', email: 'freedom@usa.gov', address: 'St. Louis', state: 'Missouri', company: 'Founding Fathers', latitude: 38.6270025, longitude: -90.19940419999999},
    {id: 16, name: 'John Adams', email: 'ja@real.com', address: '61 Circle Drive Edwardsville', state: 'Illinois', company: 'Gap', latitude: 38.7925599, longitude: -90.00304190000001},
    {id: 17, name: 'Ronald Swanson', email: 'null@null.org', address: 'Pawnee', state: 'Illinois', company: 'Parks and Recreation', latitude: 39.5917186, longitude: -89.58037390000001},
    {id: 18, name: 'Michael Scott', email: 'MScott@DunderMifflin.com', address: 'Scranton', state: 'Pennsylvania', company: 'Guns r Us', latitude: 41.408969, longitude: -75.66241219999999},
    {id: 19, name: 'Bill Gates', email: 'BGates@windows.com', address: 'Seattle', state: 'Washington', company: 'Microsoft', latitude: 47.6062095, longitude: -122.3320708},
    {id: 20, name: 'Steve Jobs', email: 'sj@apple.com', address: 'Seattle', state: 'Washington', company: 'Apple', latitude: 47.6062095, longitude: -122.3320708}
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