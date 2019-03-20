import React from 'react';

function WeatherCurrent({ currentWeather, dailyWeather, weekdays, tempInCelsius, tempInFahrenheit }) {
  const { summary, temperature, humidity, windSpeed, time } = currentWeather;
  const getCurrentTime = () => {
    const fullDate = new Date(time*1000);
    const hours = fullDate.getHours();
    const minutes = fullDate.getMinutes();
    if (minutes < 10) { 
      return hours + ':0' + minutes;
    } else {
      return hours + ':' + minutes;
    }
  }
  const currentTime = getCurrentTime();
  const today = weekdays[new Date(time*1000).getDay()-1] + ' ' + currentTime;
  const { sunriseTime, sunsetTime } = dailyWeather.data[0];
  const sunrise = new Date(sunriseTime*1000).toLocaleTimeString();
  const sunset = new Date(sunsetTime*1000).toLocaleTimeString();

  return (
    <section className="weatherDataCurrent">
      <h3>{today}</h3>
      <div className="summary">
        <p>{summary}</p>
      </div>
      <div className="temp">
        <p>{tempInCelsius ? temperature.toFixed(1) + ' °C' 
          : tempInFahrenheit.toFixed(1) + ' °F'}</p>
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