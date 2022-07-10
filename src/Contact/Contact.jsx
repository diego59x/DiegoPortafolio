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
  const mobileView = () => (
    <div>
      <div className="row ">
        <div className="col-xs-12">
          <CircleSecondary
            header="Back"
            onClick={goBack}
            classe="circleBack"
            textRight=""
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-12">
          <div className="col-xs-4 containerContact">
            <Circle
              text="diegoalvarez 1237@hotmail.com Github: diego59x Linkedin: Diego Alvarez"
            />
          </div>
        </div>
      </div>
    </div>
  )

  const desktopView = () => (
    <div className="containerPageContact">
      <CircleSecondary
        header="Back"
        onClick={goBack}
        classe="circleSelectDesktop"
        textRight=""
      />
      <div className="containerContact">
        <Circle
          text="diegoalvarez 1237@hotmail.com Github: diego59x Linkedin: Diego Alvarez"
        />
      </div>
    </div>
  )

  return (
    <div>
      {window.isDesktop ? (
        desktopView()
      ) : (
        mobileView()
      )}
    </div>
  )
}
