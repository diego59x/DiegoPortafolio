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
import overCooked from '../Assets/overCooked.png'
import overCooked2 from '../Assets/overCooked2.png'
import video from '../Assets/expandableCarousel.mp4'

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
            This project is a challenge I proposed to myself, It&#39;s a copy
            of a carousel on Netflix App on Roku Device.
            <br />
            It is done on brightscript
            <br />
            <a href="https://github.com/diego59x/expandableCarousel">
              <video width="420" height="240" autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
          </div>
          <div className="cartProject">
            This is a project for my university where I recreate Overcooked
            <a href="https://diego59x.itch.io/overcooked17">
              <img src={overCooked} alt="" />
            </a>
            <img src={overCooked2} alt="" />
          </div>
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
            <a href="https://requete.itch.io/hunting-through-time">
              <img src={hunting} alt="" />
            </a>
          </div>
          <div className="cartProject">
            With some friends we are working in this WebApp to help small
            entrepreneurs to expand their audience
            <a href="https://emprende-plus-back-end.firebaseapp.com/">
              <img src={gdeal} alt="" />
            </a>
          </div>
          <div className="cartProject">
            This is another game I&#39;ve worked on with some friends, in 3d
            <a href="https://github.com/uvg-cc3060/proyecto-3-grupo-4">
              <img src={crypts} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
