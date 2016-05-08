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
      if (y > 0 && number === matrix[y - 1][x].number
        || x > 0 && number === matrix[y][x - 1].number) {
        return false
      }
    }
  }
  return true
}
