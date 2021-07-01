import React from 'react'
import './Home.css'
import { useHistory } from 'react-router-dom'
import Circle from '../Components/PrincipalCircle/Circle'
import CircleSecondary from '../Components/SideBar/CircleSmall'

export default function Home() {
  const history = useHistory()
  const KnowMe = () => {
    history.push('/KnowMe')
  }
  // const Projects = () => {
  //   history.push('/Projects')
  // }
  return (
    <div>
      <div className="row aber">
        <div className="col-xs-10 col-sm-12 col-md-12 col-lg-4  ">
          <Circle
            text="Hi, it&#39;s Diego. I&#39;m a Junior Developer that born in 2001 so, you can guess my age"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 circleHome">
          <CircleSecondary
            header="Know Me"
            onClick={KnowMe}
            classe="boton"
          />
        </div>
        <div className="col-xs-4  HomeText ">
          <div className="texts1">
            Or let my code speak
          </div>
        </div>
        {/*
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className=" circleHome">
            <CircleSecondary
              header="Contact"
              classe="boton"
            />
          </div>
          <div className="HomeText ">
            <div className="texts1">
              Email: alv19498@uvg.edu.gt
              Github: diego59x
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className=" circleHome">
              <CircleSecondary
                header="Projects"
                onClick={Projects}
                classe="boton"
              />
            </div>
            <div className="HomeText ">
              <div className="texts1">
                See what I have made
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
