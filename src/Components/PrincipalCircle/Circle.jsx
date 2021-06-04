import React from 'react';
import './Circle.css';
export default function CirclePrincipal({
    text, 
    header,
    dimension,
    circle,
}){

    return(
        <div className={dimension}>
            <div className={circle}></div>
            <h1 className="headerCircle">{header}</h1>
            <div className="textCircle">{text}</div>
        </div>
    );
}