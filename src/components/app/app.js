import React, {Component} from 'react';
import Weather from "../weather-block/weather";
import './app.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee)

export default function App (){
    return (
        <div className="app">
            <Weather />
        </div>
    )
}
