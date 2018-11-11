import { combineReducers } from "redux";

const instructors = [
    {name: 'Dennis Ritchie', email: 'DRitchie@unix.c', location: 'Boston', company: 'Guns r Us'},
    {name: 'Penny Hanson', email: 'Example@fake.com', location: 'Central Park, New York', company: 'Guns r Us'},
    {name: 'John Smith', email: 'maybe@google.com', location: '770 Puma Blvd', company: 'Walmart'},
    {name: 'Mary johnson', email: 'Example@comcast.com', location: 'White House', company: 'Guns r Us'},
    {name: 'Michael Morgan', email: 'Example@fake.org', location: 'Busch Stadium', company: 'Guns r Us'},
    {name: 'John Smith', email: 'brad@real.com', location: '61 Circle Drive Edwardsville', company: 'Gap'},
    {name: 'Abbie Smith', email: 'kim@tim.com', location: 'Glen Carbon', company: 'Apple'},
    {name: 'Michael Patrick', email: 'Landon@fake.com', location: 'Troy, Illinois', company: 'Guns r Us'},
    {name: 'Jim Jones', email: 'me@siue.com', location: 'New York', company: 'Guns r Us'},
    {name: 'John Kelly', email: 'Kelly@outlook.com', location: 'Austin, Texas', company: 'Guns r Us'},
    {name: 'James Bond', email: 'JBond@MI6.uk', location: 'London', company: 'MI6'},
    {name: 'Patrick Brown', email: 'PBrown@fbi.gov', location: 'Pentagon', company: 'CIA'},
    {name: 'Tyler Richards', email: 'TRich@yahoo.com', location: 'Los Angeles', company: 'The Dodgers'},
    {name: 'Michael Morrison', email: 'me@mm.com', location: 'Washington Monument', company: 'NRA'},
    {name: 'Samuel Adams', email: 'freedom@usa.gov', location: 'St. Louis', company: 'Founding Fathers'},
    {name: 'John Adams', email: 'ja@real.com', location: '61 Circle Drive Edwardsville', company: 'Gap'},
    {name: 'Ronald Swanson', email: 'null@null.org', location: 'Pawnee, Illinois', company: 'Parks and Recreation'},
    {name: 'Michael Scott', email: 'MScott@DunderMifflin.com', location: 'Scranton, Pennsylvania', company: 'Guns r Us'},
    {name: 'Bill Gates', email: 'BGates@windows.com', location: 'Seattle, Washington', company: 'Microsoft'},
    {name: 'Steve Jobs', email: 'sj@apple.com', location: 'Seattle, Washington', company: 'Apple'}
]

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
  
  export default combineReducers({
    instructorList,
    Coordinates,
    SearchCriteria,
    Address
  })