import React from 'react'
import TileContainer from './TileContainer.jsx'
import GridContainer from './GridContainer.jsx'
import ScoreTooltip from './ScoreTooltip.jsx'
import './style.styl'

export default () => (
  <div className="game-container">
    <GridContainer />
    <TileContainer />
    <ScoreTooltip />
  </div>
)
