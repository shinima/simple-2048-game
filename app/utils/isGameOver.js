import { SIZE } from '../config'
import genMatrixFromState from './genMatrixFromState'

export default function isGameOver(state) {
  if (state.size < SIZE * SIZE) {
    return false
  }
  const matrix = genMatrixFromState(state)
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const number = matrix[y][x].number
      if (matrix[y - 1][x]) {
        const above = matrix[y - 1][x].number
        if (number === above) {
          return false
        }
      }
      if (matrix[x - 1][y]) {
        const left = matrix[x - 1][y].number
        if (number === left) {
          return false
        }
      }
    }
  }
  return true
}
