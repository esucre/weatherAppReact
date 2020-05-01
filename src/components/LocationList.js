import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () =>(
    
    <div>
        <WeatherLocation city = {'Panama,pa'}/>
        <WeatherLocation city = {'Colombia,col'} />
        <WeatherLocation city = {'Buenos Aires,ar'} />
        <WeatherLocation city = {'Londres,lon'} />
    </div>
);

export default LocationList;