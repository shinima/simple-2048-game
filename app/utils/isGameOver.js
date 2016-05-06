import { SIZE } from '../config'
import genMatrixFromState from './genMatrixFromState'

export default function isGameOver(state) {
  if (state.size < SIZE * SIZE) {
    return false
  }
  const matrix = genMatrixFromState(state)
  for (let y = 1; y < SIZE; y++) {
    for (let x = 1; x < SIZE; x++) {
      const number = matrix[y][x].number
      const above = matrix[y - 1][x].number
      const left = matrix[y][x - 1].number
      if (number === above || number === left) {
        return false
      }
    }
  }
  return true
}
