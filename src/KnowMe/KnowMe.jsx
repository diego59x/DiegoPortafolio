import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CircleSecondary from '../Components/SideBar/CircleSmall'
import './KnowMe.css'

export default function KnowMe() {
  const history = useHistory()
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1023)
  window.isDesktop = isDesktop
  const classDesktop = 'circleSelectDesktop'
  const classMobile = 'circleBack'

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1023)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

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
              I have over 3 years of experience as Software Engineer specializing in
              frontend and Roku development.
              Proficient in working with Brightscript and SceneGraph developing multiple
              streaming features, optimizing channel behavior.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="cartMe ">
              I consider myself friendly, determined, persistent,
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
