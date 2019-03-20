import React from 'react';

import WeatherCurrent from './WeatherCurrent';
import WeatherWeek from './WeatherWeek';

function Weather({ weather, tempIsCelsius }) {
  const currentWeather = weather.currently;
  const dailyWeather = weather.daily;
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const getFahrenheitTemp = (celsiusTemp) => celsiusTemp * 9 / 5 + 32;


  return (
    <section className="weatherData">
      <WeatherCurrent currentWeather={currentWeather} dailyWeather={dailyWeather} weekdays={weekdays} tempIsCelsius={tempIsCelsius} getFahrenheitTemp={getFahrenheitTemp}/>
      <WeatherWeek />
    </section>
  );
}

export default Weather;