import React from "react"
import './headerBadge.css'

import cloud from '../../img/cloud-solid.svg'
import wind from '../../img/wind-solid.svg'
import tint from '../../img/tint-solid.svg'

function iconChanger(icon) {
    if(icon === 'cloud'){
        return <img src={cloud} alt="Cloud" className="header-badge__pict"/>
    } else if (icon === 'wind') {
        return <img src={wind} alt="Wind" className="header-badge__pict"/>
    } else if (icon === 'tint') {
        return <img src={tint} alt="Tint" className="header-badge__pict"/>
    }
}


function HeaderBadge(props) {
    return(
        <div className="header-badge">
            <div className="header-badge__icon">
                {iconChanger(props.icon)}
            </div>
            <div className="header-badge__value">
                {props.value}
            </div>
        </div>
    )
}

export default HeaderBadge