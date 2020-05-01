import convert from 'convert-units';
import {
    SUN,
} from './../constants/weather';



const getTemperature = kelvin =>{
    return Number(convert(kelvin).from('K').to('C').toFixed(2));
}

const getWeatherState = weatherData =>{
    return SUN;
}

const transformWwather = weatherData =>{
    const {humidity, temp} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = getWeatherState(weatherData);
    const temperature = getTemperature(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind:`${speed}m/s`
        
    }

    return data;
}

export default transformWwather;