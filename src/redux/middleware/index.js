import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const makeReduxMiddleware = () => {
  const middlewares = [ sagaMiddleware ]

  if ( process.env.NODE_END !== 'production' ) {
    const { createLogger } = require('redux-logger') // eslint-disable-line global-require
    const loggerMiddleware = createLogger({
      collapsed: true,
      duration: true,
      timestamp: true,
      logErrors: true,
    })

    middlewares.push(loggerMiddleware)
  }

  return middlewares
}

export const runSagas = () => sagaMiddleware.run(sagas)

export default makeReduxMiddleware()
