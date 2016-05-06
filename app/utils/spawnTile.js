import genMatrixFromState from './genMatrixFromState'
import choice from './choice'
import { TileRecord } from '../types'
import { SIZE } from '../config'

export default function spawnTile(state) {
  const matrix = genMatrixFromState(state)
  const emptyEntries = []
  for (let x = 0; x < SIZE; x++) {
    for (let y = 0; y < SIZE; y++) {
      if (!matrix[y][x].number) {
        emptyEntries.push([x, y])
      }
    }
  }
  if (emptyEntries.length > 0) {
    const maxId = state.reduce((_maxId, record, id) => Math.max(_maxId, id), 0)
    const number = choice([1, 1, 1, 1, 2, 2, 4])
    const [x, y] = choice(emptyEntries)
    return state.set(maxId + 1, TileRecord({ x, y, number }))
  }
  return state
}
