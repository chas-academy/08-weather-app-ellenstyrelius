import React from 'react';
import styled from 'styled-components';

import colors from './colors';
import { ReactComponent as Clearday } from './icons/clearday.svg';
import { ReactComponent as Clearnight } from './icons/clearnight.svg';
import { ReactComponent as Cloudy } from './icons/cloudy.svg';
import { ReactComponent as Fog } from './icons/fog.svg';
import { ReactComponent as Partlycloudyday } from './icons/partlycloudyday.svg';
import { ReactComponent as Partlycloudynight } from './icons/partlycloudynight.svg';
import { ReactComponent as Rain } from './icons/rain.svg';
import { ReactComponent as Sleet } from './icons/sleet.svg';
import { ReactComponent as Snow } from './icons/snow.svg';
import { ReactComponent as Wind } from './icons/wind.svg';

const fill = 'none';
const stroke = colors.gray1;
const width = '80';

const Container = styled.div`
  width: ${width}px;
  margin-bottom: 16px;
`

function Icon({ icon }) {
  
  const weatherIcon = icon.charAt(0).toUpperCase() + icon.slice(1).split('-').join('');

  return (
    <Container>
    {(weatherIcon === 'Clearday' && 
      <Clearday fill={fill} stroke={stroke} width={width} />)
    }
    {(weatherIcon === 'Clearnight' && 
      <Clearnight fill={fill} stroke={stroke} height='56' />)
    }
    {(weatherIcon === 'Cloudy' && 
      <Cloudy fill={fill} stroke={stroke} width={width} />)
    }
    {(weatherIcon === 'Fog' && 
      <Fog fill={fill} stroke={stroke} width={width} />)
    }
    {(weatherIcon === 'Partlycloudyday' &&
      <Partlycloudyday fill={fill} stroke={stroke} width={width} />)
    }
    {(weatherIcon === 'Partlycloudynight' && 
      <Partlycloudynight fill={fill} stroke={stroke} width={width} />)
    }
    {(weatherIcon === 'Rain' && 
      <Rain fill={fill} stroke={stroke} width={width} />)
    }
    {(weatherIcon === 'Sleet' && 
      <Sleet fill={fill} stroke={stroke} width={width} />)
    }
    {(weatherIcon === 'Snow' && 
      <Snow fill={fill} stroke={stroke} width={width} />)
    }
    {(weatherIcon === 'Wind' && 
      <Wind fill={fill} stroke={stroke} width={width} />)
    }
    </Container>
  )
  
}

export default Icon;