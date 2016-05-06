export default ({ dispatch }) => next => action => {
  if (typeof action === 'string') {
    return dispatch({ type: action })
  }
  return next(action)
}
