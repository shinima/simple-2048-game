import React from 'react'
import TileContainer from './TileContainer.jsx'
import GridContainer from './GridContainer.jsx'
import './style.styl'

export default () => (
  <div className="game-container">
    <GridContainer rowCount={4} columnCount={4} />
    <TileContainer />
  </div>
)
