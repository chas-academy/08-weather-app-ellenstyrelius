import React from 'react';
import styled from 'styled-components';

import WeatherCurrent from './WeatherCurrent';
import Weather24Hours from './Weather24Hours';
import WeatherWeek from './WeatherWeek';
import WeatherFiveDays from './WeatherFiveDays';
import HorizontalLine from './utils/HorizontalLine';

const Container = styled.section`
  width: 100%;
`
export const getFahrenheitTemp = (celsiusTemp) => celsiusTemp * 9 / 5 + 32;

function Weather({ weather, tempIsCelsius, handleToggleUnit }) {
  const {currently: currentWeather, daily: dailyWeather, hourly: hourlyWeather} = weather;

  return (
    <Container>
      <WeatherCurrent
        {...{currentWeather, dailyWeather, tempIsCelsius, getFahrenheitTemp}}
      />
      <HorizontalLine />
      <WeatherWeek 
        {...{dailyWeather, tempIsCelsius, getFahrenheitTemp}}
      />
      <HorizontalLine />
      <Weather24Hours 
        {...{hourlyWeather, tempIsCelsius, getFahrenheitTemp}}
      />
      <HorizontalLine />
      <WeatherFiveDays 
        {...{dailyWeather, tempIsCelsius, getFahrenheitTemp}}
      />
    </Container>
  );
}

export default Weather;