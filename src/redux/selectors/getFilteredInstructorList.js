import { createSelector } from 'reselect'
import { getInstructors, getSearchText } from './rootSelectors'
import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'
import includes from 'lodash/includes'

export default createSelector(
  getInstructors,
  getSearchText,
  (instructors, searchText) => {

    return filter(instructors, instructor => (
        includes(instructor.name, searchText) ||
        includes(instructor.email, searchText) ||
        includes(instructor.company, searchText)
      ))
  }
)
