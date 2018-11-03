export const classList = (state = [], action) => {
  switch ( action.type ) {
    case 'SET_CLASS_LIST':
      return action.payload
    default:
      return state
  }
}

export default {
  classList
}
