import React from 'react';

import WeatherCurrent from './WeatherCurrent';
import Weather24Hours from './Weather24Hours';
import WeatherWeek from './WeatherWeek';
import WeatherFiveDays from './WeatherFiveDays';
import UnitButton from './UnitButton';

function Weather({ weather, tempIsCelsius, handleToggleUnit }) {
  const currentWeather = weather.currently;
  const dailyWeather = weather.daily;
  const hourlyWeather = weather.hourly;
  const getFahrenheitTemp = (celsiusTemp) => celsiusTemp * 9 / 5 + 32;

  return (
    <section>
      <WeatherCurrent 
        currentWeather={currentWeather} 
        dailyWeather={dailyWeather} 
        tempIsCelsius={tempIsCelsius} 
        getFahrenheitTemp={getFahrenheitTemp}
      />
      <UnitButton handleToggleUnit={handleToggleUnit} tempIsCelsius={tempIsCelsius}/>
      <Weather24Hours 
        hourlyWeather={hourlyWeather}
        tempIsCelsius={tempIsCelsius}
        getFahrenheitTemp={getFahrenheitTemp}
      />
      <WeatherWeek 
        dailyWeather={dailyWeather} 
        tempIsCelsius={tempIsCelsius}
        getFahrenheitTemp={getFahrenheitTemp}
      />
      <WeatherFiveDays 
        dailyWeather={dailyWeather}
        tempIsCelsius={tempIsCelsius}
        getFahrenheitTemp={getFahrenheitTemp}
      />
    </section>
  );
}

export default Weather;