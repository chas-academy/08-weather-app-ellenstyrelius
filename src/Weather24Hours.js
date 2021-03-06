import React from 'react';
import styled from 'styled-components';

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
  width: 152px;
  margin: 24px 2px 0;
  padding: 8px 0px;
  border-left: 1px solid ${colors.gray4};
  border-right 1px solid ${colors.gray4};
`
const Time = styled.p`
  font-size: 28px;
  font-weight: 200;
`
const Temp = styled.p`
  color: ${colors.gray1};
  margin-top: 8px;
  font-size: 20px;
`
const Text = styled.p`
  color: ${colors.gray1};
  margin-top: 8px;
  font-size: 16px;
`

function Weather24Hours({ hourlyWeather, tempIsCelsius, getFahrenheitTemp }) {
  const everyThirdHourIndexes = [3, 6, 9, 12, 15, 18, 21, 24];
  const everyThirdHour= [];

  const getEveryThirdHour = () => {
    everyThirdHourIndexes.map(index =>
      everyThirdHour.push(hourlyWeather.data[index])
    )
  }

  getEveryThirdHour();

  return(
    <Container>
      <h3>next 24 hours</h3>
      <FlexCenterRow>
        {everyThirdHour.map((obj, index) => {
          const celsius = obj.temperature.toFixed();
          const fahrenheit = getFahrenheitTemp(obj.temperature).toFixed();
          return (
            <WeatherItem key={index}>
              <Time>{new Date(obj.time*1000).toTimeString().slice(0, 5)}</Time>
              <Icon icon={obj.icon} height='40' marginTop='8' stroke={colors.gray1}/>
              <Temp>{tempIsCelsius ?
                celsius + ' °C' :
                fahrenheit + ' °F'
              }</Temp>
              <Text>wind: {obj.windSpeed} m/s</Text>
              <Text>humidity: {obj.humidity}</Text>
            </WeatherItem>
          )
        })}
      </FlexCenterRow>
    </Container>
  )
}

export default Weather24Hours;