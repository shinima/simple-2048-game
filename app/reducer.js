import { UP, DOWN, LEFT, RIGHT, RESTART } from './actions'
import { up, down, left, right } from './utils/move'
import resetTiles from './utils/resetTiles'

const moveHanlder = {
  [UP]: up,
  [DOWN]: down,
  [LEFT]: left,
  [RIGHT]: right,
}

export default function reducer(state = resetTiles(), action) {
  if (action.type === RESTART) {
    return resetTiles(state.reduce((_maxId, record, id) => Math.max(_maxId, id), 0) + 1)
  }
  const handler = moveHanlder[action.type]
  return handler ? handler(state) : state
}
