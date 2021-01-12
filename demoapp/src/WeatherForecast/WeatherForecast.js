import { useState } from "react";
const WeatherForecast = () =>{

    let [city, setCity] =useState(" ");
    let [unit, setUnit] = useState('imperial')

    function onCityChange(event){
        setCity(event.target.value);
        console.log(city);
    }

    function getWeatherForecast() {
        //TODO
    }

    function onUnitChange(event){
        setUnit(event.target.value);
    }
    return (
        <div className = "weather-forecast-form-div">
            <h2>Find Current Temperature</h2>
            <form id = "weather-form" onSubmit = {getWeatherForecast}>
            <label>Enter City</label>
            <input type = "text"
            name = "city"
            placeholder = "enter city"
            className = "city-text"
            maxLength = "30"
            value = {city}
            onChange = {onCityChange}
            ></input>
            <br/>
            <br/>
            <label>
                <input type = "radio"
                name="units"
                value="imperial"
                checked = {unit === 'imperial'}
                onChange={onUnitChange}/>
                Farneheit
            </label>
            <label>
                <input type = "radio"
                name = "units"
                value="metric"
                checked = {unit === 'metric'}
                onChange={onUnitChange}/>
                Celcius
            </label>
            <br/>
            <input type="submit" value ="submit" className="submit-button"/>
            </form>
        </div>
    )
}

export default WeatherForecast;