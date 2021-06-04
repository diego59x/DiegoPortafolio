import React from 'react'
import { useHistory } from 'react-router-dom'
import CircleSecondary from '../Components/SideBar/CircleSmall'

export default function KnowMe() {
  const history = useHistory()
  const goBack = () => (
    history.goBack()
  )
  return (
    <div>
      <div className="row ">
        <div className="col-4 goBack">
          <CircleSecondary
            header="Back"
            circle="secondaryCircle"
            text=""
            onClick={goBack}
          />
        </div>

        <div className="col-2" />

        <div className="col-6" />
      </div>
      <div className="row ">

        <div className="col-2" />

        <div className="col-6" />
      </div>
    </div>
  )
}
