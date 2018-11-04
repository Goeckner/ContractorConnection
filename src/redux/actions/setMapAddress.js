export const setMapAddress = address => dispatch => {
    dispatch({
      type: 'SET_MAP_ADDRESS',
      payload: address
    })
  }