import React from 'react'
import { connect } from 'react-redux'

const ScoreTooltip = ({ score }) => (
  <div className="score-tooltip">
    <p className="label">SCORE</p>
    <p className="score">{score}</p>
  </div>
)

ScoreTooltip.propTypes = {
  score: React.PropTypes.number.isRequired,
}

const getScore = state => ({ score: state.reduce((_score, { number }) => _score + number, 0) })

export default connect(getScore)(ScoreTooltip)
