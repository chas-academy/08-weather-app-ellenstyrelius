import React from 'react';

import Icon from './utils/Icon';

function Weather24Hours({ hourlyWeather, tempIsCelsius, getFahrenheitTemp }) {

  const everyThirdHourIndexes = [3, 6, 9, 12, 15, 18, 21, 24];
  const everyThirdHour= [];

  const getEveryThirdHour = () => {
    everyThirdHourIndexes.map(index =>
      everyThirdHour.push(hourlyWeather.data[index])
    )
  }

  getEveryThirdHour();

  return(
    <section>
      <h3>coming 24 hours:</h3>
      {everyThirdHour.map((obj, index) => {
        const celsius = obj.temperature.toFixed();
        const fahrenheit = getFahrenheitTemp(obj.temperature).toFixed();
        return (
          <div key={index}>
            <p>{new Date(obj.time*1000).toTimeString().slice(0, 5)}</p>
            <Icon icon={obj.icon} />
            <p>{tempIsCelsius ?
              celsius + ' °C' :
              fahrenheit + ' °F'
            }</p>
            <p>wind: {obj.windSpeed} m/s</p>
            <p>humidity: {obj.humidity}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Weather24Hours;