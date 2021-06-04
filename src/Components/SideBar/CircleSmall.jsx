import React from 'react';
import './CircleSmall.css';
export default function CirclePrincipal({
    header,
    onClick
}){

    return(
        <div className="dimensionCircleTwo">
            <h1 className="headerCircleTwo"></h1>
            <button className="btn-5" onClick={onClick}>{header}</button>
        </div>
    );
}