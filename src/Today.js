import React from 'react';

import { weekdays } from './utils/weekdays';

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
    <h3>{getToday()}</h3>
  )
}

export default Today;
