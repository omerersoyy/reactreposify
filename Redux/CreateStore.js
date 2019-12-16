import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'


export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const sagaMonitor =  null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  const store = createStore(rootReducer, applyMiddleware(...middleware))

  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
