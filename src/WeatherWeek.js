import React from 'react';

import { weekdays } from './utils/weekdays';

  //// should display "kort översikt för veckan"
  //// maybe just icons (and temperature?) then?

function WeatherWeek({ dailyWeather, tempIsCelsius, getFahrenheitTemp }) {
  const weatherDataWeekArr = dailyWeather.data;
  weatherDataWeekArr.shift();
	console.log('🐐: WeatherWeek -> weatherDataWeekArr', weatherDataWeekArr)

    return (
    <section className="weatherWeekOverview">
      <h3>the coming week:</h3>
      {weatherDataWeekArr.map((day, index) => {
        const CelsiusLow = day.temperatureLow.toFixed();
        const CelsiusHigh = day.temperatureHigh.toFixed();
        const FahrenheitLow = getFahrenheitTemp(day.temperatureLow).toFixed();
        const FahrenheitHigh = getFahrenheitTemp(day.temperatureHigh).toFixed();
        return (
          <div key={index}>
            <p>{weekdays[new Date(day.time*1000).getDay()-1]}</p>
            <p>{new Date(day.time*1000).toLocaleDateString()}</p>
            <p>{day.icon}</p>
            <p>{tempIsCelsius ? 
              `${CelsiusLow} °C - ${CelsiusHigh} °C` : 
              `${FahrenheitLow} °F - ${FahrenheitHigh} °F`}</p> 
          </div>
        )
      })}
    </section>
  );
}

export default WeatherWeek;