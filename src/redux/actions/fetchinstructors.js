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

export const setInstructorList = instructors => dispatch => {
    dispatch({
      type: 'SET_INSTRUCTOR_LIST',
      payload: instructors
    })
  }
  
  export default {
    ...setInstructorList
  }
  