import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import transformWeather from './../../services/transformWeather';
import getWeatherByCity from './../../services/getWeatherByCity';
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


class WeatherLocation extends Component{

    constructor(props){
        super(props);
        const {city} = props;
        this.state = {
            city,
            data: null,
        }
        
    }

    componentWillMount() {
        this.handleUpdateClick();
    }

       
    handleUpdateClick = () => {
        const apiUrl = getWeatherByCity(this.state.city);
        fetch(apiUrl).then( resolve =>{
            return resolve.json();
        }).then( data =>{
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data:newWeather,
            });

        });
        

    }
    render(){

        const {city,data} = this.state;

        return(

            <div className="weatherLocationCont">
                <Location city = {city}></Location>
                {data ? <WeatherData data = {data}></WeatherData> : 
                <CircularProgress></CircularProgress>}
            </div>


        );

    }
          
}


WeatherLocation.propTypes = {

    city: PropTypes.string.isRequired,

};

export default WeatherLocation;