import { List } from 'immutable'
import { UP, DOWN, LEFT, RIGHT } from './actions'

function getInitialState(rows, cols) {
  let result = List()
  for (let y = 0; y < rows; y++) {
    let oneRow = List()
    for (let x = 0; x < cols; x++) {
      oneRow = oneRow.push(0)
    }
    result = result.push(oneRow)
  }
  return result
}

// const rowCount = 4
// const columnCount = 4

// const initialState = getInitialState(rowCount, columnCount)
const initialState = List([
  List([1024, 512, 256, 128]),
  List([64, 32, 16, 8]),
  List([4, 2, 1, 1]),
  List([0, 0, 1, 1]),
])

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UP:
    case DOWN:
    case LEFT:
    case RIGHT:
    default:
      return state
  }
}
