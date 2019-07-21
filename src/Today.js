import React from 'react';
import styled from 'styled-components';

import colors from './utils/colors';
import { weekdays } from './utils/weekdays';

const Text = styled.p`
  color: ${colors.gray1};
  font-size: 32px;
  font-weight: 300;
`

function Today({ time }) {
  const getCurrentTime = () => {
    const fullDate = new Date(time*1000);
    const hours = fullDate.getHours();
    const minutes = fullDate.getMinutes();
    if (minutes < 10) { 
      return hours + ':0' + minutes;
    } else {
      return hours + ':' + minutes;
    }
  }
  const getToday = () => {
    const currentTime = getCurrentTime();
    const today = weekdays[new Date(time*1000).getDay()] + ' ' + currentTime;
    return today;
  }

  return (
    <Text>{getToday()}</Text>
  )
}

export default Today;
