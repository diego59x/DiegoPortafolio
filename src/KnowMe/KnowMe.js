import React from 'react'
import CircleSecondary from '../Components/SideBar/CircleSmall'
import { useHistory } from 'react-router-dom'

export default function KnowMe() { 
    const history = useHistory()
    const goBack = () => (
        history.goBack()
    )
    return (
        <div>
            <div className="row " >

                <div className="col-2">
                    <CircleSecondary 
                        header="Back"
                        dimension="dimensionCircleTwo"
                        circle="secondaryCircle"
                        text=''
                        onClick={goBack}
                    />
                </ div>

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