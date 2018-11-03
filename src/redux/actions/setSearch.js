export const setSearchCriteria = Searchtext => dispatch => {
    dispatch({
      type: 'SET_SEARCH',
      payload: Searchtext
    })
  }