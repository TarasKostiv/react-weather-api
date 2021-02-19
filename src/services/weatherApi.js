class weatherApi {
    apiData = {
        base: "https://api.openweathermap.org/data/2.5/weather",
        key: "0408b4f7a23f74b18e88d2d2dc5cebb4",
        units: 'metric'
    }

    async getWeather (city) {
        const res = await fetch(`${this.apiData.base}/?q=${city}&units=${this.apiData.units}&appid=${this.apiData.key}`)
        return await res.json()
    }
}

export default weatherApi