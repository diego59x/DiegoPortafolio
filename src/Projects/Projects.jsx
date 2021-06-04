import React from 'react'
import { useHistory } from 'react-router-dom'
import CircleSecondary from '../Components/SideBar/CircleSmall'

export default function Projects() {
  const history = useHistory()
  const goBack = () => (
    history.goBack()
  )
  return (
    <div>
      <div className="row ">
        <div className="col-2">
          <CircleSecondary
            header="Back"
            dimension="dimensionCircleTwo"
            circle="secondaryCircle"
            text=""
            onClick={goBack}
          />
        </div>
        <div className="col-6" />
      </div>
    </div>
  )
}
