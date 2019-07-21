import React from 'react';
import styled from 'styled-components';

import colors from './utils/colors';
import FlexCenterColumn from './utils/FlexCenterColumn';
import Icon from './utils/Icon';

const Container = styled(FlexCenterColumn)`
  width: 320px;
  margin: 8px auto 0;
  padding: 24px;
  text-align: center;
`
const TextContainer = styled.div`
  margin: 0 auto;
`
const Temp = styled.p`
  margin-top: 8px;
  color: ${colors.gray1};
  font-size: 32px;
  font-weight: 400;
`
const Text = styled.p`
  margin-top: 8px;
  color: ${colors.gray1};
`

function WeatherCurrent({ currentWeather, dailyWeather, tempIsCelsius, getFahrenheitTemp }) {
  const { icon, temperature, humidity, windSpeed } = currentWeather;
  const { sunriseTime, sunsetTime } = dailyWeather.data[0];
  const sunrise = new Date(sunriseTime*1000).toLocaleTimeString();
  const sunset = new Date(sunsetTime*1000).toLocaleTimeString();
  const fahrenheitTemp = getFahrenheitTemp(temperature);

  return (
    <Container>
      <Icon icon={icon} stroke={colors.gray1} height={88} marginTop='24'/>
      <TextContainer>
        <Temp>
          {tempIsCelsius ? temperature.toFixed() + ' °C' 
          : fahrenheitTemp.toFixed() + ' °F'}
        </Temp>
        <Text>wind: {windSpeed} m/s</Text>
        <Text>humidity: {humidity}</Text>
        <Text>-</Text>
        <Text><i>sunrise {sunrise}</i></Text>
        <Text><i>sunset {sunset}</i></Text>
      </TextContainer>
    </Container>
  );
}

export default WeatherCurrent;