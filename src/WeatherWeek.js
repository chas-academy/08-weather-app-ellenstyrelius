import React from 'react';
import styled from 'styled-components';

import { weekdays } from './utils/weekdays';
import Icon from './utils/Icon';
import colors from './utils/colors';
import FlexCenterRow from './utils/FlexCenterRow';
import FlexCenterColumn from './utils/FlexCenterColumn';

const Container = styled.section`
  width: 100%;
  margin: 64px auto 0;
  padding: 0 8px;
  text-align: center;
`
const WeatherItem = styled(FlexCenterColumn)`
  width: 130px;
  margin: 24px 2px 0;
  padding: 0 0 8px 0;
  border-left: 1px solid ${colors.gray4};
  border-right: 1px solid ${colors.gray4};
`
const Text = styled.p`
  margin-top: 8px;
  font-size: 20px;
  font-weight: 300;
`
const Temp = styled.p`
  margin-top: 8px;
  color: ${colors.gray1};
  font-size: 24px;
`

function WeatherWeek({ dailyWeather, tempIsCelsius, getFahrenheitTemp }) {
  const weatherDataWeekArr = dailyWeather.data.slice(1, 8);
  const getDate = (dayNumber) => {
    return new Date(weatherDataWeekArr[dayNumber].time*1000).toDateString().slice(4, 10);
  }
  const firstDay = getDate(0);
  const lastDay = getDate(6);

    return (
    <Container>
      <h3>coming week</h3>
      <Text>{firstDay} - {lastDay}</Text>
        <FlexCenterRow>
        {weatherDataWeekArr.map((day, index) => {
          const celsiusHigh = day.temperatureHigh.toFixed();
          const fahrenheitHigh = getFahrenheitTemp(day.temperatureHigh).toFixed();
          return (
            <WeatherItem key={index}>
              <Text>{weekdays[new Date(day.time*1000).getDay()]}</Text>
              <Icon icon={day.icon} height='48' marginTop='16'/>
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