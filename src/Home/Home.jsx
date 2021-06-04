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
            <div className="row " >
                <div className="col-2"/>
                <div className="col-5 container ">
                    <Circle 
                        text="I'm a Junior Developer that born in 2001 so, you can guess my age"
                        header="Hi, it's Diego"
                        dimension="dimensionCircleOne"
                        circle="notes"
                    />
                </div>
                <div className="col-4"/>
            </div>
            <div className="row" >
                <div className="col-4"/>
                <div className="col-2 sidebar">
                    <CircleSecondary 
                        header="Know Me"
                        circle="secondaryCircle"
                        onClick={KnowMe}
                    />
                    <CircleSecondary 
                        header="Contact"
                        circle="secondaryCircle"
                        onClick={Contact}
                    />
                    <CircleSecondary 
                        header="Projects"
                        circle="secondaryCircle"
                        onClick={Projects}
                    />
                </div>
                <div className="col-2"/>
                <div className="col-4 "> 
                    <div className="texts1">
                        <div className="HomeText">Or let my code speak</div>
                    </div>
                    <div className="texts2">
                        <div className="HomeText">Wanna work together?</div>
                    </div>
                    <div className="texts3">
                        <div className="HomeText">See what I have made</div>
                    </div>
                </div>
            </div>
        </div>
    )
}