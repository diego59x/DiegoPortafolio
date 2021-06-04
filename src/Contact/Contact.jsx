import React from 'react'
import CircleSecondary from '../Components/SideBar/CircleSmall'
import { useHistory } from 'react-router-dom'
import Circle from '../Components/PrincipalCircle/Circle'

export default function Contact() { 
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
                        circle="secondaryCircle"
                        text=''
                        onClick={goBack}
                    />
                </ div>
                <div className="col-6">
                    <Circle 
                        text="Email: diegoalvarez1237@hotmail.com
                        Github: Diego59x
                        "
                        header="Let's work together"
                        dimension="dimensionCircleOne"
                        circle="notes"
                    />
                </div>
            </div>
        </div>
        
    )
}