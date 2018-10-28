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

// export const instructorList = (state = instructors, action) => {
//     switch ( action.type ) {
//       case 'SET_INSTRUCTOR_LIST':
//         return action.payload
//       default:
//         return state
//     }
//   }
  
  export default function (state = null, action) {
    return instructors
  }