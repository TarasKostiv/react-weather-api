import React, {Component} from 'react'
import './weather.css'
import weatherApi from "../../services/weatherApi";

import HeaderBadge from "../headerBadge"
import Temperature from "../temperature"
import City from '../city'
import Clouds from '../clouds'

class Weather extends Component {
    apiWeather = new weatherApi()

    state = {
        weather: {}
    }

    getWeather = (city) => {
        this.apiWeather
            .getWeather(city)
            .then((result) => {
                this.setState({
                    weather: result
                })
            })
    }

    search = (e) => {
        if(e.key === 'Enter') {
            let city = e.target.value
            this.getWeather(city)
            return this.getWeather
        }
    }

    render() {
        const { weather } = this.state
        const { apiData } = this.apiWeather
        return (
            <div className={'weather'}>
                <input type="text" placeholder='Write city name...' onKeyPress={this.search} className='weather__input'/>
                {(typeof this.state.weather.main != 'undefined' ? (
                    <div className='weather__content'>
                        <header className="weather__header">
                            <HeaderBadge value={`${weather.wind.deg}%`} icon={'cloud'}/>
                            <HeaderBadge value={`${weather.wind.speed}${apiData.units === 'imperial' ? ('m/h') : ('m/s')}`} icon={'wind'}/>
                            <HeaderBadge value={`${weather.main.humidity}%`} icon={'tint'}/>
                        </header>
                        <Temperature value={weather.main.temp} units={apiData.units === 'imperial' ? ('°F') : ('°C')}/>
                        <City name={weather.name} country={weather.sys.country}/>
                        <Clouds clouds={weather.clouds.all} descprition={weather}/>
                    </div>
                ) : (
                    <div className='weather__content'>
                        <header className="weather__header">
                            <HeaderBadge value={`---`} icon={'coffee'}/>
                            <HeaderBadge value={`---`} icon={'wind'}/>
                            <HeaderBadge value={`---`} icon={'tint'}/>
                        </header>
                        <Temperature value={'---'} units={apiData.units === 'Imperial' ? ('°F') : ('°C')}/>
                        <City name={'---'} country={'---'}/>
                        <Clouds clouds={'---'} />
                    </div>
                ))}
            </div>
        )
    }
}

export default Weather