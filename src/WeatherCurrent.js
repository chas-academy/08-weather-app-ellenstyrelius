import React from 'react';

function WeatherCurrent({ currentWeather, dailyWeather, tempIsCelsius, getFahrenheitTemp }) {
  const { summary, temperature, humidity, windSpeed } = currentWeather;
  
  const { sunriseTime, sunsetTime } = dailyWeather.data[0];
  const sunrise = new Date(sunriseTime*1000).toLocaleTimeString();
  const sunset = new Date(sunsetTime*1000).toLocaleTimeString();
  const fahrenheitTemp = getFahrenheitTemp(temperature);

  return (
    <section className="weatherDataCurrent">
      <div className="summary">
        <p>{summary}</p>
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