import React from 'react';

import Icon from './utils/Icon';

// import { ReactComponent as Partlycloudyday } from './utils/icons/partlycloudyday.svg';

function WeatherCurrent({ currentWeather, dailyWeather, tempIsCelsius, getFahrenheitTemp }) {
  const { icon, temperature, humidity, windSpeed } = currentWeather;
  const weatherIcon = icon.charAt(0).toUpperCase() + icon.slice(1).split('-').join('');
  const { sunriseTime, sunsetTime } = dailyWeather.data[0];
  const sunrise = new Date(sunriseTime*1000).toLocaleTimeString();
  const sunset = new Date(sunsetTime*1000).toLocaleTimeString();
  const fahrenheitTemp = getFahrenheitTemp(temperature);

  return (
    <section className="weatherDataCurrent">
      <div className="icon">
        <Icon weatherIcon={weatherIcon} />
      </div>
      <div className="temp">
        <p>{tempIsCelsius ? temperature.toFixed(1) + ' °C' 
          : fahrenheitTemp.toFixed(1) + ' °F'}</p>
      </div>
      <div className="wind">
        <p>wind: {windSpeed} m/s</p>
      </div>
      <div className="humidity">
        <p>humidity: {humidity}</p>
      </div>
      <div className="sun">
        <p>sunrise at {sunrise}</p>
      </div>
      <div className="sun">
        <p>sunset at {sunset}</p>
      </div>
    </section>
  );
}

export default WeatherCurrent;