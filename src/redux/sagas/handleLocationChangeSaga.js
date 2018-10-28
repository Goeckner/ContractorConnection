import { push } from 'react-router-redux'
import { setActivePage } from '../redux/actions/rootActions'

export function* handleLocationChangeSaga() {
  while (true) {
    yield put(push())
  }
}
