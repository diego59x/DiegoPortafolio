import React, { useMemo, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFirebaseApp } from 'reactfire'
import CircleSecondary from '../Components/SideBar/CircleSmall'
import CustomeCursor from '../Components/CustomeCursor/CustomeCursor'
import 'firebase/firestore'
import './KnowMe.css'

export default function KnowMe() {
  const history = useHistory()
  const firebase = useFirebaseApp()
  const db = firebase.firestore()
  const dbSkills = useMemo(() => db.collection('Skills'), [])
  const [skills, setSkills] = useState([])
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

  const fetchProjects = async () => {
    const skillsDb = []
    dbSkills.onSnapshot((snapshot) => {
      snapshot.forEach((product) => {
        skillsDb.push(product.data())
      })
      setSkills(skillsDb)
    })
  }
  useEffect(() => {
    fetchProjects()
  }, [])

  const goBack = () => (
    history.goBack()
  )
  return (
    <div>
      <CustomeCursor />
      <div className="row ">
        <div className="col-xs-4 headerMe">
          <CircleSecondary
            header="Back"
            onClick={goBack}
            classe={window.isDesktop ? classDesktop : classMobile}
            textRight="About me"
          />
        </div>
      </div>
      <div className="containercardMe">
        <div className="row">
          <div className="col-12 ">
            <div className="cardMe ">
              I have over 3 years of experience as Software Engineer specializing in
              frontend and Roku development.
              Proficient in working with Brightscript and SceneGraph developing multiple
              streaming features, optimizing channel behavior.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="cardMe ">
              I am a persevering and determined
              person to meet my goals. I am able to
              lead a team by delegating
              responsibilities, as well as receiving
              them. Change is not a limitation since I
              have a fast and effective learning,
              delivering efficient and quality work.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cardSkillContainer">
            {
                skills?.map((item) => (
                  <div key={item.name} className="cardSkill">
                    {item.name}
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}
