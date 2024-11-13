import React, { useEffect, useRef, useState } from 'react'
import './CustomeCursor.css'

const CustomeCursor = () => {
  const cursorRef = useRef(null)
  const [botonPos, setBotonPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2
      setBotonPos({ x: mouseX, y: mouseY })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <div
      className="circleCursor"
      style={{ top: botonPos.y, left: botonPos.x }}
      ref={cursorRef}
    >
      <div className="circleInsideTwo">
        <div
          className="circleInsideOne"
        />
      </div>
    </div>
  )
}
export default CustomeCursor
