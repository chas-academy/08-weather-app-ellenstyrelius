import React from 'react';

function Weather({ weather }) {
  const { summary, temperature, humidity, windSpeed, time } = weather.currently;
  const { sunriseTime, sunsetTime } = weather.daily.data[0];
  const getHoursAndMinutes = (timestamp) => {
    const fullDate = new Date(timestamp*1000);
    const hours = fullDate.getHours();
    const minutes = fullDate.getMinutes();
    if (minutes < 10) { 
      return hours + ':0' + minutes;
    } else {
      return hours + ':' + minutes;
    }
  }
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const currentTime = getHoursAndMinutes(time);
  const today = weekdays[new Date(time*1000).getDay()-1] + ' ' + currentTime;
  const sunrise = getHoursAndMinutes(sunriseTime);
  const sunset = getHoursAndMinutes(sunsetTime);

  return (
    <section className="weatherData">
      <h3>{today}</h3>
      <div className="summary">
        <p>{summary}</p>
      </div>
      <div className="temp">
        <p>temperature: {temperature}°C</p>
      </div>
      <div className="wind">
        <p>wind speed: {windSpeed} m/s</p>
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