import React from 'react';

import WeatherCurrent from './WeatherCurrent';
import WeatherWeek from './WeatherWeek';

function Weather({ weather, tempIsCelsius }) {
  const currentWeather = weather.currently;
  const dailyWeather = weather.daily;
  const getFahrenheitTemp = (celsiusTemp) => celsiusTemp * 9 / 5 + 32;

  return (
    <section className="weatherData">
      <WeatherCurrent 
        currentWeather={currentWeather} 
        dailyWeather={dailyWeather} 
        tempIsCelsius={tempIsCelsius} 
        getFahrenheitTemp={getFahrenheitTemp}/>
      <WeatherWeek 
        dailyWeather={dailyWeather} 
        tempIsCelsius={tempIsCelsius}
        getFahrenheitTemp={getFahrenheitTemp}/>
    </section>
  );
}

export default Weather;