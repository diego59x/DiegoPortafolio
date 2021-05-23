import React from 'react'
import './Home.css'
import Circle from '../Components/PrincipalCircle/Circle'
import CircleSecondary from '../Components/SideBar/CircleSmall'

export default function Home() { 



    return (
        <div>
            <div className="row " >
                <div className="col-6">
                    <Circle 
                        text="I'm a Junior Developer that born in 2001 so you can guess my age"
                        header="Hi, it's Diego"
                        dimension="dimensionCircleOne"
                        circle="notes"
                    />
                </div>
                
                <div className="col-6">
                    <CircleSecondary 
                        header="Know Me"
                        dimension="dimensionCircleTwo"
                        circle="secondaryCircle"
                        text='Or let my code speak'
                    />
                    <CircleSecondary 
                        header="Contact"
                        dimension="dimensionCircleTwo"
                        circle="secondaryCircle"
                        text='Wanna work together?'
                    />
                    <CircleSecondary 
                        header="Projects"
                        dimension="dimensionCircleTwo"
                        circle="secondaryCircle"
                        text='See what I have made'
                    />
                </div>
            </div>
            
            
        
        </div>
        
    )
}