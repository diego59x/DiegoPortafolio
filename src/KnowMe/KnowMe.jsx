import React from 'react'
import { useHistory } from 'react-router-dom'
import CircleSecondary from '../Components/SideBar/CircleSmall'
import './KnowMe.css'
import me from '../Assets/me1.jpeg'

export default function KnowMe() {
  const history = useHistory()
  const classDesktop = 'circleSelectDesktop'
  const classMobile = 'circleBack'

  const goBack = () => (
    history.goBack()
  )
  return (
    <div>
      <div className="row ">
        <div className="col-xs-4 headerMe">
          <CircleSecondary
            header="Back"
            onClick={goBack}
            classe={window.isDesktop ? classDesktop : classMobile}
            textRight="Know Me"
          />
        </div>
      </div>
      <div className="containerCartMe">
        <div className="row">
          <div className="col-12 ">
            <div className="cartMe ">
              Hi, how i said before i&#39;m a junior web devloper.
              I like both front-end and back-end,
              but also make videogames.
              I have made some games for my own and another ones in my university.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <img src={me} alt="" className="imgMe" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="cartMe ">
              I consider myself a fresh person, friendly, determined, persistent,
              quiet, but also outgoing. I like to analyze a problem from all its perspectives,
              I don&#39;t give up easily and like to do perfect stuff.
              I love when something I made all by myself works
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
