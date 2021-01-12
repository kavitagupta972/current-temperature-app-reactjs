import { useState } from "react";
const WeatherForecast = () =>{

    let [city, setCity] =useState(" ");

    function onCityChange(event){
        setCity(event.target.value);
        console.log(city);
    }
    return (
        <div className = "weather-forecast-div">
            <label>Enter City</label>
            <input type = "text"
            name = "city"
            placeholder = "enter city"
            className = "city-text"
            maxLength = "30"
            value = {city}
            onChange = {onCityChange}
            ></input>
        </div>
    )
}

export default WeatherForecast;