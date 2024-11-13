import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CircleSecondary from '../Components/SideBar/CircleSmall'
import CustomeCursor from '../Components/CustomeCursor/CustomeCursor'
import './Contact.css'

export default function Contact() {
  const history = useHistory()
  const classDesktop = 'circleSelectDesktop'
  const classMobile = 'circleBack'
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1023)
  window.isDesktop = isDesktop

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

  const SendEmail = () => (
    window.open('mailto:diegoalvarez59@icloud.com', '_blank')
  )

  const openGithub = () => (
    window.open('https://github.com/diego59x', '_blank', 'noopener,noreferrer')
  )

  const openLinkedIn = () => (
    window.open('https://www.linkedin.com/in/diego-alvarez-b18ab4178/', '_blank', 'noopener,noreferrer')
  )

  const mobileView = () => (
    <div>
      <div className="row ">
        <div className="col-xs-12 headerContact">
          <CircleSecondary
            header="Back"
            onClick={goBack}
            classe={window.isDesktop ? classDesktop : classMobile}
            textRight="My info"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-md-9 col-lg-9 col-12 circleContact">
          <CircleSecondary
            header="Email"
            onClick={SendEmail}
            classe="circleSelectDesktop github-link"
            textRight="diegoalvarez59@icloud.com"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-md-9 col-lg-9 col-12 circleContact">
          <CircleSecondary
            header="GitHub"
            onClick={openGithub}
            classe="circleSelectDesktop github-link"
            textRight="Visit my GitHub"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-md-9 col-lg-9 col-12 circleContact">
          <CircleSecondary
            header="LinkedIn"
            onClick={openLinkedIn}
            classe="circleSelectDesktop linkdein-link"
            textRight="Let&#39;s conect in LinkedIn"
          />
        </div>
      </div>
    </div>
  )

  const desktopView = () => (
    <div className="containerPageContact">
      <CustomeCursor />
      <div className="row">
        <div className="col-md-4 col-lg-3  ">
          <CircleSecondary
            header="Back"
            onClick={goBack}
            classe="circleSelectDesktop"
            textRight=""
          />
        </div>
        <div className="col-md-8 col-lg-9  ">
          <div className="row">
            <CircleSecondary
              header="Email"
              onClick={SendEmail}
              classe="circleSelectDesktop github-link"
              textRight="diegoalvarez59@icloud.com"
            />
          </div>
          <div className="row">
            <CircleSecondary
              header="GitHub"
              onClick={openGithub}
              classe="circleSelectDesktop github-link"
              textRight="Visit my GitHub"
            />
          </div>
          <div className="row">
            <CircleSecondary
              header="LinkedIn"
              onClick={openLinkedIn}
              classe="circleSelectDesktop linkdein-link"
              textRight="Let&#39;s conect in LinkedIn"
            />
          </div>
        </div>
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
