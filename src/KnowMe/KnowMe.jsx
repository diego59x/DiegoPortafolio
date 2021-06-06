import React from 'react'
import { useHistory } from 'react-router-dom'
import CircleSecondary from '../Components/SideBar/CircleSmall'
import './KnowMe.css'
import me from '../Assets/me1.jpeg'

export default function KnowMe() {
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
            classe="boton"
          />
        </div>
        <div className="col-6 headerMe">
          Know Me
        </div>

      </div>
      <div className="row ">
        <div className="col-6">
          <div className="cartMe ">
            Hi, how i said before i&#39;m a junior web devloper. I like both front-end and back-end,
            but also make videogames.
            I have made some games for my own and another ones in my university.
            {/* <img src={Scendere} alt="" className="imageProject" href="https://github.com/diego59x/Scendere.git" /> */}
          </div>
          <div className="col-6">
            <img src={me} alt="" className="imgMe" />
          </div>
          <div className="cartMe ">
            I consider myself a fresh person, friendly, determined, persistent,
            quiet, but also outgoing. I like to analyze a problem from all its perspectives,
            I don&#39;t give up easily and like to do perfect stuff.
            I love when something I made all by myself works
          </div>
        </div>
      </div>
    </div>
  )
}
