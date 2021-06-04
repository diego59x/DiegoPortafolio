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
                <div className="col-4 goBack">
                    <CircleSecondary 
                        header="Back"
                        circle="secondaryCircle"
                        text=''
                        onClick={goBack}
                    />
                </ div>
                
                <div className="col-2">
                    
                </ div>

                <div className="col-6">
                    
                </div>
            </div>
            <div className="row " >
                
                <div className="col-2">
                    
                </ div>

                <div className="col-6">
                    
                </div>
            </div>
            
        
        </div>
        
    )
}