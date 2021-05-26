import React from 'react'
import './Home.css'
import Circle from '../Components/PrincipalCircle/Circle'
import { useHistory } from 'react-router-dom'
import CircleSecondary from '../Components/SideBar/CircleSmall'

export default function Home() { 
    const history = useHistory()
    const KnowMe = () =>{
        history.push('/KnowMe')
    }
    const Contact = () =>{
        history.push('/Contact')
    }
    const Projects = () =>{
        history.push('/Projects')
    }


    return (
        <div>
            <div className="row container" >
                <div className="col-6 ">
                    <Circle 
                        text="I'm a Junior Developer that born in 2001 so you can guess my age"
                        header="Hi, it's Diego"
                        dimension="dimensionCircleOne"
                        circle="notes"
                    />
                </div>
                
                <div className="col-6 sidebar">
                    <CircleSecondary 
                        header="Know Me"
                        dimension="dimensionCircleTwo"
                        circle="secondaryCircle"
                        text='Or let my code speak'
                        onClick={KnowMe}
                    />
                    <CircleSecondary 
                        header="Contact"
                        dimension="dimensionCircleTwo"
                        circle="secondaryCircle"
                        text='Wanna work together?'
                        onClick={Contact}
                    />
                    <CircleSecondary 
                        header="Projects"
                        dimension="dimensionCircleTwo"
                        circle="secondaryCircle"
                        text='See what I have made'
                        onClick={Projects}
                    />
                </div>
            </div>
            
            
        
        </div>
        
    )
}