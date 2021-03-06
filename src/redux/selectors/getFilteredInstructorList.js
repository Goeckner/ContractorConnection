import { createSelector } from 'reselect'
import { getInstructors, getSearchText } from './rootSelectors'
import filter from 'lodash/filter'
import includes from 'lodash/includes'

export default createSelector(
  getInstructors,
  getSearchText,
  (instructors, searchText) => {

    return filter(instructors, instructor => (
        includes(instructor.name.toLowerCase(), searchText.toLowerCase()) ||
        includes(instructor.email.toLowerCase(), searchText.toLowerCase()) ||
        includes(instructor.company.toLowerCase(), searchText.toLowerCase()) ||
        includes(instructor.address.toLowerCase(), searchText.toLowerCase()) ||
        includes(instructor.state.toLowerCase(), searchText.toLowerCase()) ||
        includes(instructor.city.toLowerCase(), searchText.toLowerCase())
      ))
  }
)
