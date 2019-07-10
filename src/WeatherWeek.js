import React from 'react';
import styled from 'styled-components';

import { weekdays } from './utils/weekdays';
import Icon from './utils/Icon';
import colors from './utils/colors';
import FlexCenterRow from './utils/FlexCenterRow';
import FlexCenterColumn from './utils/FlexCenterColumn';

const Container = styled.section`
  background: ${colors.yellowLight};
  width: 100%;
  margin: 64px auto 0;
  padding: 24px;
  text-align: center;
`
const WeatherItem = styled(FlexCenterColumn)`
  width: 120px;
  margin: 24px 2px 0;
  border-left: 1px solid ${colors.gray3};
  border-right 1px solid ${colors.gray3};
`
const Text = styled.p`
  font-size: 20px;
  font-weight: 300;
`
const Temp = styled.p`
  color: ${colors.gray1};
  font-size: 24px;
`

function WeatherWeek({ dailyWeather, tempIsCelsius, getFahrenheitTemp }) {
  const weatherDataWeekArr = dailyWeather.data.slice(1, 8);

    return (
    <Container>
      <h3>coming week:</h3>
      <FlexCenterRow>
      {weatherDataWeekArr.map((day, index) => {
        const celsiusHigh = day.temperatureHigh.toFixed();
        const fahrenheitHigh = getFahrenheitTemp(day.temperatureHigh).toFixed();
        return (
          <WeatherItem key={index}>
            <Text>{weekdays[new Date(day.time*1000).getDay()]}</Text>
            <Text>{new Date(day.time*1000).toDateString().slice(4, 10)}</Text>
            <Icon icon={day.icon} marginTop='8'/>
            <Temp>{tempIsCelsius ? 
              celsiusHigh + ' °C' : 
              fahrenheitHigh + ' °F'}</Temp> 
          </WeatherItem>
        )
      })}
      </FlexCenterRow>
    </Container>
  );
}

export default WeatherWeek;