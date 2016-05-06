import { TileRecord } from './../types'
import genMatrixFromState from './genMatrixFromState'
import { SIZE } from './../config'
import spawnTile from './spawnTile'

export function up(state) {
  const matrix = genMatrixFromState(state)
  let moved = false
  const newState = state.withMutations(s => {
    for (let x = 0; x < SIZE; x++) { // 一列一列进行分析
      let lastY = -1
      let lastNumber = 0
      let lastId = -1
      for (let y = 0; y < SIZE; y++) {
        const cntNumber = matrix[y][x].number
        const cntId = matrix[y][x].id
        if (cntNumber === 0) {
          continue
        }
        if (lastNumber === cntNumber) { // 上次的数字和这一次的数字相同
          // 与上一个数字进行合并
          s.set(cntId, TileRecord({ x, y: lastY, number: cntNumber + lastNumber }))
          // 删去上一个数字
          s.delete(lastId)

          // lastY保持不变
          lastNumber = 0 // 置为0 表示本次操作中无法再进行合并
          lastId = cntId
          moved = true
        } else { // 数字不相同
          if (y !== lastY + 1) {
            s.set(cntId, TileRecord({ x, y: lastY + 1, number: cntNumber })) // 将tile往上移
            moved = true
          }

          lastY += 1
          lastNumber = cntNumber
          lastId = cntId
        }
      }
    }
  })
  return moved ? spawnTile(newState) : newState
}

export function down(state) {
  const matrix = genMatrixFromState(state)
  let moved = false
  const newState = state.withMutations(s => {
    for (let x = 0; x < SIZE; x++) {
      let lastY = SIZE
      let lastNumber = 0
      let lastId = -1
      for (let y = SIZE - 1; y >= 0; y--) {
        const cntNumber = matrix[y][x].number
        const cntId = matrix[y][x].id
        if (cntNumber === 0) {
          continue
        }
        if (lastNumber === cntNumber) {
          s.set(cntId, TileRecord({ x, y: lastY, number: cntNumber + lastNumber }))
          s.delete(lastId)

          lastNumber = 0
          lastId = cntId
          moved = true
        } else {
          if (y !== lastY - 1) {
            s.set(cntId, TileRecord({ x, y: lastY - 1, number: cntNumber })) // 将tile往下移
            moved = true
          }

          lastY -= 1
          lastNumber = cntNumber
          lastId = cntId
        }
      }
    }
  })
  return moved ? spawnTile(newState) : newState
}

export function left(state) {
  const matrix = genMatrixFromState(state)
  let moved = false
  const newState = state.withMutations(s => {
    for (let y = 0; y < SIZE; y++) {
      let lastX = -1
      let lastNumber = 0
      let lastId = -1
      for (let x = 0; x < SIZE; x++) {
        const cntNumber = matrix[y][x].number
        const cntId = matrix[y][x].id
        if (cntNumber === 0) {
          continue
        }
        if (lastNumber === cntNumber) {
          s.set(cntId, TileRecord({ x: lastX, y, number: cntNumber + lastNumber }))
          s.delete(lastId)

          lastNumber = 0
          lastId = cntId
          moved = true
        } else {
          if (x !== lastX + 1) {
            s.set(cntId, TileRecord({ x: lastX + 1, y, number: cntNumber }))
            moved = true
          }

          lastX += 1
          lastNumber = cntNumber
          lastId = cntId
        }
      }
    }
  })
  return moved ? spawnTile(newState) : newState
}

export function right(state) {
  const matrix = genMatrixFromState(state)
  let moved = false
  const newState = state.withMutations(s => {
    for (let y = 0; y < SIZE; y++) {
      let lastX = SIZE
      let lastNumber = 0
      let lastId = -1
      for (let x = SIZE - 1; x >= 0; x--) {
        const cntNumber = matrix[y][x].number
        const cntId = matrix[y][x].id
        if (cntNumber === 0) {
          continue
        }
        if (lastNumber === cntNumber) {
          s.set(cntId, TileRecord({ x: lastX, y, number: cntNumber + lastNumber }))
          s.delete(lastId)

          lastNumber = 0
          lastId = cntId
          moved = true
        } else {
          if (x !== lastX - 1) {
            s.set(cntId, TileRecord({ x: lastX - 1, y, number: cntNumber }))
            moved = true
          }

          lastX -= 1
          lastNumber = cntNumber
          lastId = cntId
        }
      }
    }
  })
  return moved ? spawnTile(newState) : newState
}
