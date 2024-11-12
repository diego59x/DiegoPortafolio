import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CircleSecondary from '../Components/SideBar/CircleSmall'
import './Contact.css'

export default function Contact() {
  const history = useHistory()
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

  const openGithub = () => (
    window.open('https://github.com/diego59x', '_blank', 'noopener,noreferrer')
  )

  const openLinkedIn = () => (
    window.open('https://www.linkedin.com/in/diego-alvarez-b18ab4178/', '_blank', 'noopener,noreferrer')
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
      <div className="row containerPageContactMobile">
        <div className="col-xs-4 col-md-9 col-lg-9 col-12">
          <CircleSecondary
            header="Email"
            onClick={openGithub}
            classe="circleSelectDesktop github-link"
            textRight="diegoalvarez1237@hotmail.com"
          />

          <CircleSecondary
            header="GitHub"
            onClick={openGithub}
            classe="circleSelectDesktop github-link"
            textRight="Visit my GitHub"
          />
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
              onClick={openGithub}
              classe="circleSelectDesktop github-link"
              textRight="diegoalvarez1237@hotmail.com"
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
