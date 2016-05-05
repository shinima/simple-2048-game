import React from 'react'
import { List } from 'immutable'
import { connect } from 'react-redux'
import { getPropsForTileContainer } from '../selectors'

@connect(getPropsForTileContainer)
export default class TileContainer extends React.Component {
  static propTypes = {
    tiles: React.PropTypes.instanceOf(List).isRequired,
  }

  render() {
    const tiles = []
    this.props.tiles.forEach((row, y) => (
        row.forEach((cell, x) => {
          tiles.push(<Tile key={`${x}-${y}`} x={x} y={y} number={Number(cell)} />)
        })
      )
    )
    return (
      <div className="tile-container">
        {tiles}
      </div>
    )
  }
}

const tileSize = 107
const gridSize = 106
const gap = 15

const Tile = ({ x, y, number }) => {
  if (number === 0) {
    return null
  }
  const left = (gridSize - tileSize) / 2 + (gridSize + gap) * x
  const top = (gridSize - tileSize) / 2 + (gridSize + gap) * y
  return (
    <div
      className={`tile number-${number}`}
      style={{ left, top }}
    >
      {number}
    </div>
  )
}
Tile.propTypes = {
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  number: React.PropTypes.number.isRequired,
}
