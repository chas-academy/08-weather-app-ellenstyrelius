import React from 'react';

function WeatherWeek({ dailyWeather, weekdays, getFahrenheitTemp, tempIsCelsius }) {
  const weatherDataWeekArr = dailyWeather.data;

  ////////////////////////////////////////?????????
  weatherDataWeekArr.shift();
	console.log('🐐: WeatherWeek -> weatherDataWeekArr', weatherDataWeekArr)

  const dates = weatherDataWeekArr.map(day => {
    const timestamp = day.time;
    const date = new Date(timestamp*1000).toLocaleDateString();
    return date;
  });
	console.log('🐐: WeatherWeek -> dates', dates)


    return (
    <section className="weatherWeekOverview">
      <p>hej</p>
    </section>
  );
}

export default WeatherWeek;