import React from 'react'
import PropTypes from 'prop-types'
import './CircleSmall.css'

const CircleSmall = ({ onClick, header }) => {
  CircleSmall.propTypes = {
    onClick: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
  }

  return (
    <div className="dimensionCircleTwo">
      <button type="button" className="btn-5" onClick={onClick}>{header}</button>
    </div>
  )
}

export default CircleSmall
