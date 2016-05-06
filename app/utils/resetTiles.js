import { Map, Set } from 'immutable'
import randInt from './randInt'
import choice from './choice'
import { TileRecord } from '../types'

export default function resetTiles(startId = 0) {
  const tileCount = randInt(2, 4)
  return Map().withMutations(map => {
    let usedSet = Set()
    for (let i = 0; i < tileCount; i++) {
      const x = randInt(0, 3)
      const y = randInt(0, 3)
      const usedKey = `${x}-${y}`
      if (usedSet.has(usedKey)) {
        i--
        continue
      }
      usedSet = usedSet.add(usedKey)
      const number = choice([1, 2, 4, 8]) // 1 | 2 | 4 | 8
      map.set(i + startId, TileRecord({ x, y, number }))
    }
  })
}
