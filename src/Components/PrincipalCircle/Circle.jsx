import React from 'react'
import PropTypes from 'prop-types'
import './Circle.css'

const CirclePrincipal = ({
  text,
  header,
  dimension,
  circle,
}) => {
  CirclePrincipal.propTypes = {
    text: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    dimension: PropTypes.string.isRequired,
    circle: PropTypes.string.isRequired,
  }

  return (
    <div className={dimension}>
      <div className={circle} />
      <h1 className="headerCircle">{header}</h1>
      <div className="textCircle">{text}</div>
    </div>
  )
}
export default CirclePrincipal
