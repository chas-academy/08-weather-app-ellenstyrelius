import React from 'react';
import styled from 'styled-components';

import Icon from './utils/Icon';
import colors from './utils/colors';
import FlexCenterRow from './utils/FlexCenterRow';
import FlexCenterColumn from './utils/FlexCenterColumn';

const Container = styled.section`
  width: 90%;
  margin: 64px auto 0;
  text-align: center;
`
const WeatherContainer = styled(FlexCenterRow)`
  margin-top: 32px;
`
const Item = styled(FlexCenterColumn)`
  margin: 24px 2px 0;
  padding: 8px 24px;
  border-left: 1px solid ${colors.gray4};
  border-right 1px solid ${colors.gray4};
`
const Time = styled.p`
  font-size: 24px;
  font-weight: 300;
`
const Temp = styled.p`
  color: ${colors.gray1};
  font-size: 32px;
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
      <h3>next 24 hours:</h3>
      <WeatherContainer>
        {everyThirdHour.map((obj, index) => {
          const celsius = obj.temperature.toFixed();
          const fahrenheit = getFahrenheitTemp(obj.temperature).toFixed();
          return (
            <Item key={index}>
              <Time>{new Date(obj.time*1000).toTimeString().slice(0, 5)}</Time>
              <Icon icon={obj.icon} />
              <Temp>{tempIsCelsius ?
                celsius + ' °C' :
                fahrenheit + ' °F'
              }</Temp>
              <p>wind: {obj.windSpeed} m/s</p>
              <p>humidity: {obj.humidity}</p>
            </Item>
          )
        })}
      </WeatherContainer>
    </Container>
  )
}

export default Weather24Hours;