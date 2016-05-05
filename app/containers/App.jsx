import React from 'react'
import '../style.styl'
import TileContainer from './TileContainer.jsx'

export default () => (
  <div className="game-container">
    <GridContainer rowCount={4} columnCount={4} />
    <TileContainer />
  </div>
)

const GridCell = () => (
  <div className="grid-cell" />
)

const GridRow = ({ count }) => {
  const cells = []
  for (let i = 0; i < count; i++) {
    cells.push(<GridCell key={i} />)
  }
  return (
    <div className="grid-row">{cells}</div>
  )
}
GridRow.propTypes = {
  count: React.PropTypes.number.isRequired,
}

const GridContainer = ({ rowCount, columnCount }) => {
  const rows = []
  for (let i = 0; i < rowCount; i++) {
    rows.push(<GridRow key={i} count={columnCount} />)
  }
  return (
    <div className="grid-container">{rows}</div>
  )
}
GridContainer.propTypes = {
  rowCount: React.PropTypes.number.isRequired,
  columnCount: React.PropTypes.number.isRequired,
}
