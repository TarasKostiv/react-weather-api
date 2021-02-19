import React from "react"
import './tempterature.css'

function Temperature(props) {
    return(
        <div className='temperature'>
            <div className='temperature__content'>
                <h2 className='temperature__temp'>{props.value}</h2>
                <span className='temperature__units'>{props.units}</span>
            </div>
            <p className="temperature__feel">Feel like: {props.feelTemp}</p>
        </div>
    )
}

export default Temperature;