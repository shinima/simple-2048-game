import React from 'react'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { getPropsForTileContainer } from './selectors'
import Tile from './Tile.jsx'
import { UP, DOWN, LEFT, RIGHT, RESTART } from './actions'
import store from './store'
import isGameOver from './utils/isGameOver'

@connect(getPropsForTileContainer)
export default class TileContainer extends React.Component {
  static propTypes = {
    tiles: React.PropTypes.instanceOf(Map).isRequired,
    dispatch: React.PropTypes.func.isRequired,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = event => {
    const dispatch = this.props.dispatch
    let catched = true
    switch (event.keyCode) {
      case 38: // up
      case 87: // w
        dispatch(UP)
        break
      case 40: // down
      case 83: // s
        dispatch(DOWN)
        break
      case 37: // left
      case 65: // a
        dispatch(LEFT)
        break
      case 68: // d
      case 39: // right
        dispatch(RIGHT)
        break
      case 82:
        dispatch(RESTART)
        break
      default:
        catched = false
    }
    if (catched) {
      event.preventDefault()
      const state = store.getState()
      if (isGameOver(state)) {
        const score = state.reduce((_score, { number }) => _score + number, 0)
        alert(`GAME OVER!\nYour score is ${score}\nPress R to restart game.`)
      }
    }
  }

  render() {
    const tilesHtml = this.props.tiles.map(({ x, y, number }, id) =>
      <Tile key={id} id={id} x={x} y={y} number={Number(number)} />
    ).toArray()
    return (
      <div className="tile-container">
        {tilesHtml}
      </div>
    )
  }
}
