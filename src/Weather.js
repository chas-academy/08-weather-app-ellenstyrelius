import React from 'react';

import WeatherCurrent from './WeatherCurrent';
import WeatherWeek from './WeatherWeek';

function Weather({ weather, tempInCelsius }) {
  // const { summary, temperature, humidity, windSpeed, time } = weather.currently;
  const currentWeather = weather.currently;
  const dailyWeather = weather.daily;
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // const today = weekdays[new Date(time*1000).getDay()-1] + ' ' + currentTime;
  // const sunrise = new Date(sunriseTime*1000).toLocaleTimeString();
  // const sunset = new Date(sunsetTime*1000).toLocaleTimeString();
  const tempInFahrenheit = tempInCelsius * 9 / 5 + 32;

  return (
    <section className="weatherData">
      <WeatherCurrent currentWeather={currentWeather} dailyWeather={dailyWeather} weekdays={weekdays} tempInCelsius={tempInCelsius} tempInFahrenheit={tempInFahrenheit}/>
      <WeatherWeek />
    </section>
  );
}

export default Weather;