import React from 'react';
import styled from 'styled-components';

import colors from './utils/colors';
import FlexCenter from './utils/FlexCenter';
import Icon from './utils/Icon';

const WeatherContainer = styled.section`
  width: 320px;
  margin: 64px auto 0;
  padding: 16px;
  border-bottom: 2px solid ${colors.blue};
  text-align: center;
`
const IconContainer = styled(FlexCenter)`
  margin-top: 24px;
`
const TextContainer = styled.div`
  margin: 0 auto;
`
const Temp = styled.p`
  color: ${colors.gray1};
  font-size: 32px;
`

function WeatherCurrent({ currentWeather, dailyWeather, tempIsCelsius, getFahrenheitTemp }) {
  const { icon, temperature, humidity, windSpeed } = currentWeather;
  const { sunriseTime, sunsetTime } = dailyWeather.data[0];
  const sunrise = new Date(sunriseTime*1000).toLocaleTimeString();
  const sunset = new Date(sunsetTime*1000).toLocaleTimeString();
  const fahrenheitTemp = getFahrenheitTemp(temperature);

  return (
    <WeatherContainer>
      <h3>weather right now:</h3>
      <IconContainer>
        <Icon icon={icon} fill="none" stroke={colors.blue} width={100}/>
      </IconContainer>
      <TextContainer>
        <Temp>
          {tempIsCelsius ? temperature.toFixed(1) + ' °C' 
          : fahrenheitTemp.toFixed(1) + ' °F'}
        </Temp>
        <p>wind: {windSpeed} m/s</p>
        <p>humidity: {humidity}</p>
        <p>sunrise at {sunrise}</p>
        <p>sunset at {sunset}</p>
      </TextContainer>
    </WeatherContainer>
  );
}

export default WeatherCurrent;