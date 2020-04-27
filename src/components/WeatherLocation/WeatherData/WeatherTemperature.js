import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css'
import {
    SUN,
    CLOUD,
    CLOUDY,
    FOG,
    RAIN,
    WINDY,
} from '../../../constants/weather';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [WINDY]: "windy",
    [SUN]: "day-sunny",
    [FOG]: "day-fog",
};

const sizeIcons = '4x';

const getWeatherIcons = weatherState =>{

    let icon = icons[weatherState];
    if(icon)
        return <WeatherIcons name = {icon} size = {sizeIcons} className = "wicon" ></WeatherIcons>
    else
        return <WeatherIcons name = 'day-sunny'  size = {sizeIcons} className = "wicon"></WeatherIcons>
}

const WeatherTemperature = ({temperature, weatherState}) => {
        return(
            <div className = "weatherTemperatureCont">
                {
                    getWeatherIcons(weatherState)
                }
                <span className = "temperature">{`${temperature}`}</span> 
                <span className = "temperatureType">{`C°`}</span>
            </div>
            
            
        );
};

WeatherTemperature.propTypes = {

    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired

};

export default WeatherTemperature;