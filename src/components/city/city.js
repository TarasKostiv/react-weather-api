import React from "react"
import './city.css'

export default (props) => {
    return (
        <div className='city'>
            <h2 className="city__header">{props.name}</h2>
            <p className="city__country">{props.country}</p>
        </div>
    )
}