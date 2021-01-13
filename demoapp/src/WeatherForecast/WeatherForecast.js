import { useState } from "react";
import DisplayData from "../DisplayData/DisplayData";
const WeatherForecast = () =>{

    let [city, setCity] =useState(" ");
    let [unit, setUnit] = useState('metric');
    let [resp, setResp] = useState({});

    function onCityChange(event){
        setCity(event.target.value);
    }

    function getWeatherForecast(event) {
        event.preventDefault();

        let encodedCity = encodeURIComponent(city);
       fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${encodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "a2b827e9fdmsh333a114f31872ecp141d50jsn45796c7950cd",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response =>  {
            setResp(response);
            console.log(response);
        })
        .catch(err => {
            console.log("Error has come. please check your api")
            console.error(err);
        });
    
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
            <DisplayData 
            resp = {resp}
            city = {city}
            message = "hello world"
            >
            </DisplayData>
        </div>
    )
}

export default WeatherForecast;