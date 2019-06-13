import React from 'react';

import { weekdays } from './utils/weekdays';

function WeatherFiveDays({ dailyWeather, tempIsCelsius, getFahrenheitTemp }) {
  const fiveDaysWeather = dailyWeather.data.slice(1, 6);

  return (
    <section>
      <h3>next five days:</h3>
      {fiveDaysWeather.map((day, index) => {
        const { time, icon, summary, windSpeed, humidity, sunriseTime, sunsetTime } = day;
        const celsiusHigh = day.temperatureHigh.toFixed();
        const celsiusLow = day.temperatureLow.toFixed();
        const fahrenheitHigh = getFahrenheitTemp(day.temperatureHigh).toFixed();
        const fahrenheitLow = getFahrenheitTemp(day.temperatureLow).toFixed();
        const sunrise = new Date(sunriseTime*1000).toLocaleTimeString();
        const sunset = new Date(sunsetTime*1000).toLocaleTimeString();
        return (
          <div key={index}>
            <p>{weekdays[new Date(time*1000).getDay()]}</p>
            <p>{new Date(time*1000).toDateString().slice(4, 10)}</p>
            <p>{icon}</p>
            <p>{summary}</p>
            <p>daytime: {tempIsCelsius ? celsiusHigh + ' °C' : fahrenheitHigh + ' °F'}</p>
            <p>nighttime: {tempIsCelsius ? celsiusLow + ' °C' : fahrenheitLow + ' °F'}</p>
            <p>wind: {windSpeed} m/s</p>
            <p>humidity: {humidity}</p>
            <p>sunrise at {sunrise}</p>
            <p>sunset at {sunset}</p>
          </div>
        )
      })}
    </section>
  )
}

export default WeatherFiveDays;