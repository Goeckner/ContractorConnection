import { createSelector } from 'reselect'
import { getInstructorList, getSearchText } from './rootSelectors'
import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'
import includes from 'lodash/includes'

export default createSelector(
  getInstructorList,
  getSearchText,
  (instructors, searchText) => {

    return filter(instructors, instructor => (
      !includes(instructor, searchText)
    ))
  }
)
