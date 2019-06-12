import React from 'react';

// should display weather every third hour current day (24 hours?)

function Weather24Hours({ hourlyWeather, tempIsCelsius, getFahrenheitTemp }) {

  const everyThirdHourIndexes = [3, 6, 9, 12, 15, 18, 21, 24];
  const everyThirdHour= [];

  const getEveryThirdHour = () => {
    everyThirdHourIndexes.map(index =>
      everyThirdHour.push(hourlyWeather.data[index])
    )
  }

  getEveryThirdHour();
  
  console.log('🐐: functionWeather24Hours -> everyThirdHour', everyThirdHour)

  const hour = everyThirdHour[7];
  const time = new Date(hour.time*1000).toLocaleTimeString();
  console.log('🐐: functionWeather24Hours -> time', time)

  return(
    <div>Hey, I'm today's weather! (°-°)</div>
  )
}

export default Weather24Hours;