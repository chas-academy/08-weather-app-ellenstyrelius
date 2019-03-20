import React from 'react';

function Weather({ weather, celsius }) {
  const { summary, temperature, humidity, windSpeed, time } = weather.currently;
  const { sunriseTime, sunsetTime } = weather.daily.data[0];
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
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const today = weekdays[new Date(time*1000).getDay()-1] + ' ' + currentTime;
  const sunrise = new Date(sunriseTime*1000).toLocaleTimeString();
  const sunset = new Date(sunsetTime*1000).toLocaleTimeString();
  const fahrenheit = temperature * 9 / 5 + 32;

  return (
    <section className="weatherData">
      <h3>{today}</h3>
      <div className="summary">
        <p>{summary}</p>
      </div>
      <div className="temp">
        <p>{celsius ? temperature.toFixed(1) + ' °C' 
          : fahrenheit.toFixed(1) + ' °F'}</p>
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

export default Weather;