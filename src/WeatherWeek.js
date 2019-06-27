import React from 'react';

import { weekdays } from './utils/weekdays';
import Icon from './utils/Icon';

function WeatherWeek({ dailyWeather, tempIsCelsius, getFahrenheitTemp }) {
  const weatherDataWeekArr = dailyWeather.data.slice(1, 8);

    return (
    <section className="weatherWeek">
      <h3>coming week:</h3>
      <div className="weatherWeekOverview">
      {weatherDataWeekArr.map((day, index) => {
        const celsiusHigh = day.temperatureHigh.toFixed();
        const fahrenheitHigh = getFahrenheitTemp(day.temperatureHigh).toFixed();
        return (
          <div key={index}>
            <p>{weekdays[new Date(day.time*1000).getDay()]}</p>
            <p>{new Date(day.time*1000).toDateString().slice(4, 10)}</p>
            <Icon icon={day.icon} />
            <p>{tempIsCelsius ? 
              celsiusHigh + ' °C' : 
              fahrenheitHigh + ' °F'}</p> 
          </div>
        )
      })}
      </div>
    </section>
  );
}

export default WeatherWeek;