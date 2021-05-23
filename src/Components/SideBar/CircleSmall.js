import React from 'react';
import './CircleSmall.css';
export default function CirclePrincipal({
    text, 
    header,
    dimension,
    onClick
}){

    return(
        <div className={dimension}>
            <div className="labelText">
                {text}
            </div>
            <h1 className="headerCircleTwo"></h1>
            <button class="btn-5" onClick={onClick}>{header}</button>
        </div>
    );
}