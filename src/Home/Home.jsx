import React, { useState, useEffect } from 'react'
import './Home.css'
import { useHistory } from 'react-router-dom'
import Circle from '../Components/PrincipalCircle/Circle'
import CircleSecondary from '../Components/SideBar/CircleSmall'
import CustomeCursor from '../Components/CustomeCursor/CustomeCursor'

export default function Home() {
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

  const KnowMe = () => {
    history.push('/KnowMe')
  }

  const Projects = () => {
    history.push('/Projects')
  }

  const Contact = () => {
    history.push('/Contact')
  }

  const mobileView = () => (
    <div>
      <div className="nav nav-justified">
        <div className="col-xs-10 col-sm-12">
          <Circle
            text="I&#39;m a Computer Science Engineer - FrontEnd Developer with experience on Roku, SmartTv&#39;s, React and Unity"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 circleHome">
          <CircleSecondary
            header="Experience"
            onClick={KnowMe}
            textRight="Get to know me"
            classe="circleSelect"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 circleHome">
          <CircleSecondary
            header="Contact"
            onClick={Contact}
            textRight="Let's work together"
            classe="circleSelect"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 circleHome">
          <CircleSecondary
            header="Projects"
            onClick={Projects}
            textRight="See what I have made"
            classe="circleSelect"
          />
        </div>
      </div>
    </div>
  )

  const desktopView = () => (
    <div className="homeContainer">
      <CustomeCursor />
      <div className="row">
        <div className="nav nav-justified">
          <div className="col-md-12 col-lg-12  ">
            <Circle
              text="Hi, it&#39;s Diego. I&#39;m a Computer Science Engineer - FrontEnd Developer with experience on Roku, SmartTv&#39;s, React and Unity"
            />
          </div>
        </div>
        <div className="col-xs-4">
          <CircleSecondary
            header="Experience"
            onClick={KnowMe}
            textRight="Get to know me"
            classe="circleSelectDesktop"
          />
          <CircleSecondary
            header="Contact"
            onClick={Contact}
            textRight="Let's work together"
            classe="circleSelectDesktop"
          />
          <CircleSecondary
            header="Projects"
            onClick={Projects}
            textRight="See what I have made"
            classe="circleSelectDesktop"
          />
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {isDesktop ? (
        desktopView()
      ) : (
        mobileView()
      )}
    </div>
  )
}
