import React from "react"
import './tempterature.css'

function Temperature(props) {
    return(
        <div className='temperature'>
            <h2 className='temperature__temp'>{props.value}</h2>
            <span className='temperature__units'>{props.units}</span>
        </div>
    )
}

export default Temperature;