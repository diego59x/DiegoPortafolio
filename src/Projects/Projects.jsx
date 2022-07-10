import React from 'react'
import { useHistory } from 'react-router-dom'
import './Projects.css'
import CircleSecondary from '../Components/SideBar/CircleSmall'
import Scendere from '../Assets/autumnFall.jpeg'
import Swap from '../Assets/swap.png'
import ninja from '../Assets/ninjahunter.png'
import hunting from '../Assets/hunting.png'
import crypts from '../Assets/crypts.png'
import gdeal from '../Assets/gdeal.png'

export default function Projects() {
  const history = useHistory()
  const classDesktop = 'circleSelectDesktop'
  const classMobile = 'circleBack'
  const goBack = () => (
    history.goBack()
  )
  return (
    <div>
      <div className="row">
        <div className="col-xs-4 headerProject">
          <CircleSecondary
            header="Back"
            onClick={goBack}
            classe={window.isDesktop ? classDesktop : classMobile}
            textRight="Projects"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 containerCartProject">
          <div className="cartProject">
            This game is the work I&#39;m proudest of, I spent to much
            time in this couse I really like it.
            <a href="https://github.com/diego59x/Scendere.git">
              <img src={Scendere} alt="" />
            </a>
          </div>
          <div className="cartProject">
            This project is about to develop a WebApp, in there you can hear music,
            analize and manage data of the reproductions.
            <a href="https://github.com/Bato007/MediaUVG">
              <img src={Swap} alt="" />
            </a>
          </div>
          <div className="cartProject">
            With two friends we participate in the GameJam2021 with this game in 2D
            <a href="https://github.com/donaldosebas/gameJam2021">
              <img src={ninja} alt="" />
            </a>
          </div>
          <div className="cartProject">
            For a project in my university we do this one in 2D
            <a href="https://github.com/Requetetin/JuegosProyecto2">
              <img src={hunting} alt="" />
            </a>
          </div>
          <div className="cartProject">
            With some friends we are working in this WebApp to help small
            entrepreneurs to expand their audience
            <a href="https://github.com/Raulangel51/Emprende-plus-app">
              <img src={gdeal} alt="" />
            </a>
          </div>
          <div className="cartProject">
            This is another game we&#39;re working on with some friends, in 3d
            <a href="https://github.com/uvg-cc3060/proyecto-3-grupo-4">
              <img src={crypts} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
