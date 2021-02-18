import React from "react"
import './clouds.css'
import cloud from '../../img/cloud-solid.svg'
import cloudRain from '../../img/cloud-rain-solid.svg'
import sun from '../../img/sun-solid.svg'

function cloudiness (cloudValue, rainValue, description){
    if(cloudValue <= 15){
        return (
            <div className='clouds__content'>
                <img className='clouds__icon' src={sun} alt="sun"/>
                <p className='clouds__txt'>Not clouds</p>
            </div>
        )
    } else if(cloudValue > 15) {
        return (
            <div className='clouds__content'>
                <img className='clouds__icon' src={cloud} alt="cloud"/>
                <p className='clouds__txt'>Cloudy</p>
            </div>
        )
    } else {
        return <p>---</p>
    }
}

export default function Clouds (props) {
    return(
        <div className="clouds">
            <p className="clouds__cloudiness">
                {cloudiness(props.clouds, null, null)}
            </p>
        </div>
    )
}