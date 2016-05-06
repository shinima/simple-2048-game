import React from 'react'

const tileSize = 107
const gridSize = 106
const gap = 15

const Tile = ({ id, x, y, number }) => {
  if (number === 0) {
    return null
  }
  const left = (gridSize - tileSize) / 2 + (gridSize + gap) * x
  const top = (gridSize - tileSize) / 2 + (gridSize + gap) * y
  return (
    <div
      data-id={id}
      className={`tile number-${number}`}
      style={{ transform: `translate(${left}px, ${top}px)` }}
    >
      {number}
    </div>
  )
}
Tile.propTypes = {
  id: React.PropTypes.number.isRequired,
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  number: React.PropTypes.number.isRequired,
}

export default Tile
