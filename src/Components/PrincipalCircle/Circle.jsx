import React from 'react'
import PropTypes from 'prop-types'
import './Circle.css'

const CirclePrincipal = ({
  text,
}) => {
  CirclePrincipal.propTypes = {
    text: PropTypes.string.isRequired,
  }

  return (
    <div className="containerCircle">
      <div className="bigCircle" />
      <div className="headerCircle">{text}</div>
    </div>
  )
}
export default CirclePrincipal
