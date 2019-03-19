import React from 'react';

function Weather({ weather }) {
  const { summary, temperature, humidity, windSpeed } = weather.currently;
  const { sunriseTime, sunsetTime } = weather.daily.data[0];
	console.log('🐐: Weather -> sunriseTime', sunriseTime)
  const sunrise = new Date(sunriseTime);
  console.log(sunrise);

  return (
    <section className="weatherData">
      <h3>weather right now:</h3>
      <div className="summary">
        <p>{summary}</p>
      </div>
      <div className="temp">
        <p>temperature: {temperature}°C</p>
      </div>
      <div className="humidity">
        <p>humidity: {humidity}</p>
      </div>
      <div className="wind">
        <p>wind speed: {windSpeed}</p>
      </div>
      {/* <div className="sun">
        <p>sunrise: {sunrise}</p>
      </div> */}
      <div className="sun">
        <p>sunset: {sunsetTime}</p>
      </div>
    </section>
  );
}

export default Weather;