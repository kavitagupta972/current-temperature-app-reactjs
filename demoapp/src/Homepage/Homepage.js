import React from "react";
import WeatherForecast from "../WeatherForecast/WeatherForecast"

const Homepage = () =>{
    return(
        <React.Fragment>
            <div className = "appContainer">
            <WeatherForecast />
            </div>
        </React.Fragment>
    )
}