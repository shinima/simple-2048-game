import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import simpleStringDispatchMiddleware from './simpleStringDispatchMiddleware'
import thunkMiddleware from 'redux-thunk'

export default createStore(
  reducer,
  applyMiddleware(simpleStringDispatchMiddleware, thunkMiddleware)
)
