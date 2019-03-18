import React from 'react';

function Weather({ temp, humidity, wind, summary }) {
  return (
    <section className="weatherData">
      <h4>weather right now:</h4>
      <div className="summary">
        <p>{summary}</p>
      </div>
      <div className="temp">
        <p>temperature: {temp}°C</p>
      </div>
      <div className="humidity">
        <p>humidity: {humidity}</p>
      </div>
      <div className="wind">
        <p>wind speed: {wind}</p>
      </div>
    </section>
  );
}

export default Weather;