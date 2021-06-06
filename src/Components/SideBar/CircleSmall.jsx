import React from 'react'
import PropTypes from 'prop-types'
import './CircleSmall.css'

const CircleSmall = ({ onClick, header, classe }) => {
  CircleSmall.propTypes = {
    onClick: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    classe: PropTypes.string.isRequired,
  }

  return (
    <div>
      <div role="button" tabIndex="0" className={`btn-5 ${classe}`} aria-hidden="true" onClick={onClick}>{header}</div>
    </div>
  )
}

export default CircleSmall
