import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css'

const WeatherExtraInfo = ({humidity, wind}) =>{
    return(
        <div className = "weatherExtraInfoCont">
            <WeatherIcons name = {'hot'} className = "wicon" >
                <span className = "weatherExtraInfoText">{`Humedad: ${humidity}%`}</span>
            </WeatherIcons>
           
            <WeatherIcons name = {'day-cloudy-gusts'} className = "wicon" >
                <span className = "weatherExtraInfoText">{`Viento: ${wind}`}</span>
            </WeatherIcons>
            
        </div>
    ); 

};

WeatherExtraInfo.propTypes = {

    humidity:PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired

};

export default WeatherExtraInfo;