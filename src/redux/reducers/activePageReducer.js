export const activePage = (state = '', action) => {
  switch ( action.type ) {
    case 'SET_ACTIVE_PAGE':
      return action.payload
    default:
      return state
  }
}

export default {
  activePage
}
