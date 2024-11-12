import React, { useMemo, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Projects.css'
import { useFirebaseApp } from 'reactfire'
import CircleSecondary from '../Components/SideBar/CircleSmall'
import 'firebase/firestore'

export default function Projects() {
  const firebase = useFirebaseApp()
  const db = firebase.firestore()
  const dbPersonalProjects = useMemo(() => db.collection('PersonalProjects'), [])
  const [projects, setProjects] = useState([])
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1023)
  window.isDesktop = isDesktop

  const history = useHistory()
  const classDesktop = 'circleSelectDesktop'
  const classMobile = 'circleBack'
  const goBack = () => (
    history.goBack()
  )

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1023)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  const fetchProjects = async () => {
    const projectsDb = []
    dbPersonalProjects.onSnapshot((snapshot) => {
      snapshot.forEach((product) => {
        projectsDb.push(product.data())
      })
      setProjects(projectsDb)
    })
  }
  useEffect(() => {
    fetchProjects()
  }, [])

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
          {projects?.map((detail) => {
            if (detail.isVideo) {
              return (
                <div className="cartProject">
                  {detail.Description}
                  <a href={detail.url_github}>
                    <video width="420" height="240" autoPlay muted loop>
                      <source src={detail.url_image[0]} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </a>
                </div>
              )
            }
            return (
              <div className="cartProject">
                {detail.Description}
                <a href={detail.url_github}>
                  <img src={detail.url_image[0]} alt="" />
                </a>
                {detail.url_image.map((image, index) => { if (index > 0) { return (<img src={image} alt="" />) } return (<></>) })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
