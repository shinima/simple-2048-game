import React from 'react'

const GridCell = () => (
  <div className="grid-cell" />
)

const GridRow = () => (
  <div className="grid-row">
    <GridCell />
    <GridCell />
    <GridCell />
    <GridCell />
  </div>
)

const GridContainer = () => (
  <div className="grid-container">
    <GridRow />
    <GridRow />
    <GridRow />
    <GridRow />
  </div>
)
export default GridContainer
