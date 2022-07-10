import React, { useState, useEffect } from 'react'
import './Home.css'
import { useHistory } from 'react-router-dom'
import Circle from '../Components/PrincipalCircle/Circle'
import CircleSecondary from '../Components/SideBar/CircleSmall'

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

  const mobilView = () => (
    <div>
      <div className="nav nav-justified">
        <div className="col-xs-10 col-sm-12">
          <Circle
            text="Hi, it&#39;s Diego. I&#39;m a Junior Developer that born in 2001 so,
            you can guess my age"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 circleHome">
          <CircleSecondary
            header="Know Me"
            onClick={KnowMe}
            textRight="Or let my code speak"
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
    <div>
      <div className="row">
        <div className="nav nav-justified">
          <div className="col-md-12 col-lg-12  ">
            <Circle
              text="Hi, it&#39;s Diego. I&#39;m a Junior Developer that born in 2001 so,
              you can guess my age"
            />
          </div>
        </div>
        <div className="col-xs-4">
          <CircleSecondary
            header="Know Me"
            onClick={KnowMe}
            textRight="Or let my code speak"
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
        mobilView()
      )}
    </div>
  )
}
