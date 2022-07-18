import React from 'react'
import PropTypes from 'prop-types'
import './CircleSmall.css'

const CircleSmall = ({
  onClick, header, textRight, classe,
}) => {
  CircleSmall.propTypes = {
    onClick: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    textRight: PropTypes.string.isRequired,
    classe: PropTypes.string.isRequired,
  }

  return (
    <div className="containerCircleSmall">
      <div className="containerButton">
        <div role="button" tabIndex="0" className={classe} aria-hidden="true" onClick={onClick}>
          <div className="headerCircleSmall">
            {header}
          </div>
        </div>
      </div>
      <div className={` ${classe === 'circleBack' ? 'textRightTitle' : 'textRightDeco'} `}>
        {textRight}
      </div>
    </div>
  )
}

export default CircleSmall
