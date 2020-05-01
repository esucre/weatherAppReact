import {baseWeatherUrl, apiKey} from './../constants/apiURL';
const getWeatherByCity = city => {

    return `${baseWeatherUrl}?q=${city}&appid=${apiKey}`;
}

export default getWeatherByCity;