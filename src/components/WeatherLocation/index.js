import React, {Component} from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
    CLOUD,
    CLOUDY,
    FOG,
    RAIN,
    WINDY,
} from './../../constants/weather';

const location = 'Panama,pa';
const apiKey = '09ca28081a77450e8088aca19eaabc6c';
const base_weather_url = 'https://api.openweathermap.org/data/2.5/weather';
const api_weather = `${base_weather_url}?q=${location}&appid=${apiKey}`;

const data ={
    temperature: 28,
    weatherState: SUN,
    humidity: 74,
    wind: '16km/h',
}



class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city:'Rusia',
            data: data,
        }
        
    }



    getWeatherState = weatherData =>{
        return SUN;
    }

    getData = weatherData =>{
        const {humidity, temp} = weatherData.main;
        const {speed} = weatherData.wind;
        const weatherState = this.getWeatherState(weatherData);

        const data = {
            humidity,
            temperature:temp,
            weatherState,
            wind:`${speed}m/s`
            
        }

        return data;
    }
    
    
    handleUpdateClick = () => {
        fetch(api_weather).then( resolve =>{
            return resolve.json();
        }).then( data =>{
            const newWeather = this.getData(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data:newWeather
            });

        });
        

    }
    render(){

        const {city,data} = this.state;

        return(

            <div className="weatherLocationCont">
                <Location city = {city}></Location>
                <WeatherData data = {data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>


        );

    }
          
}

export default WeatherLocation;