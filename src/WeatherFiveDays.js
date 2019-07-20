import React from 'react';
import styled from 'styled-components';

import { weekdays } from './utils/weekdays';
import Icon from './utils/Icon';
import FlexCenterColumn from './utils/FlexCenterColumn';
import FlexCenterRow from './utils/FlexCenterRow'
import colors from './utils/colors';

const Container = styled.section`
  margin: 64px auto 0;
  text-align: center;
`
const WeatherItem = styled(FlexCenterColumn)`
  width: 320px;
  margin-top: 24px;
  padding: 24px;
  border-bottom: 1px solid ${colors.gray4};
`
const Day = styled.p`
  font-size: 24px;
  font-weight: 300;
`
const Description = styled.p`
  margin-top: 16px;
  font-size: 24px;
  font-weight: 300;
  font-style: italic;
`
const Text = styled.p`
  margin-top: 8px;
  color: ${colors.gray1};
`

function WeatherFiveDays({ dailyWeather, tempIsCelsius, getFahrenheitTemp }) {
  const fiveDaysWeather = dailyWeather.data.slice(1, 6);
  const getDate = (dayNumber) => {
    return new Date(fiveDaysWeather[dayNumber].time*1000).toDateString().slice(4, 10);
  }
  const firstDay = getDate(0);
  const lastDay = getDate(4);

  return (
    <Container>
      <h3>next five days</h3>
      <Day>{firstDay} - {lastDay}</Day>
      <FlexCenterColumn>
        {fiveDaysWeather.map((day, index) => {
          const { time, icon, summary, windSpeed, humidity, sunriseTime, sunsetTime } = day;
          const celsiusHigh = day.temperatureHigh.toFixed();
          const celsiusLow = day.temperatureLow.toFixed();
          const fahrenheitHigh = getFahrenheitTemp(day.temperatureHigh).toFixed();
          const fahrenheitLow = getFahrenheitTemp(day.temperatureLow).toFixed();
          const sunrise = new Date(sunriseTime*1000).toLocaleTimeString();
          const sunset = new Date(sunsetTime*1000).toLocaleTimeString();
          return (
            <WeatherItem key={index}>
              <Day>{weekdays[new Date(time*1000).getDay()]}</Day>
              <Icon icon={icon} stroke={colors.gray1} height='72' marginTop='16'/>
              <Description>{summary}</Description>
              <Text>daytime: {tempIsCelsius ? celsiusHigh + ' °C' : fahrenheitHigh + ' °F'}</Text>
              <Text>nighttime: {tempIsCelsius ? celsiusLow + ' °C' : fahrenheitLow + ' °F'}</Text>
              <Text>-</Text>
              <Text>wind: {windSpeed} m/s</Text>
              <Text>humidity: {humidity}</Text>
              <Text>-</Text>
              <Text><i>sunrise {sunrise}</i></Text>
              <Text><i>sunset {sunset}</i></Text>
            </WeatherItem>
          )
        })}
      </FlexCenterColumn>
    </Container>
  )
}

export default WeatherFiveDays;