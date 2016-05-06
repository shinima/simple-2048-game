export default function genMatrixFromState(state) {
  const getCell = () => ({ id: 0, number: 0 })
  const getRow = () => [getCell(), getCell(), getCell(), getCell()]
  const matrix = [getRow(), getRow(), getRow(), getRow()]
  state.forEach(({ x, y, number }, id) => {
    matrix[y][x] = { id, number }
  })
  return matrix
}
