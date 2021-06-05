import React from 'react'
import { useHistory } from 'react-router-dom'
import CircleSecondary from '../Components/SideBar/CircleSmall'
import Circle from '../Components/PrincipalCircle/Circle'
import './Contact.css'

export default function Contact() {
  const history = useHistory()
  const goBack = () => (
    history.goBack()
  )

  return (
    <div>
      <div className="row ">
        <div className="col-4 circleBack">
          <CircleSecondary
            header="Back"
            onClick={goBack}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-12">
          <div className="col-4 containerContact">
            <Circle
              text=""
            />
          </div>
          <div className="col-4">
            diegoalvarez1237@hotmail.com
            Github: Diego59x
          </div>
        </div>
      </div>
    </div>
  )
}
