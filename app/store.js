import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import simpleStringDispatchMiddleware from './simpleStringDispatchMiddleware'

export default createStore(
  reducer,
  applyMiddleware(simpleStringDispatchMiddleware)
)
