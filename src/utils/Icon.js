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

function Icon({ icon, stroke, width, marginTop }) {
  
  const weatherIcon = icon.charAt(0).toUpperCase() + icon.slice(1).split('-').join('');

  let strokeProp = null;
  let widthProp = null;

  // css properties for icons with default values if props are not received from parent component:
  stroke ? strokeProp = stroke : strokeProp = colors.gray1;
  width ? widthProp = width : widthProp = '80';

  const Container = styled.div`
    width: ${widthProp}px;
    height: ${widthProp}px;
    margin-top: ${marginTop}px;
    display: flex;
    align-items: center;
  `

  return (
    <Container>
    {(weatherIcon === 'Clearday' && 
      <Clearday fill='none' stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Clearnight' && 
      <Clearnight fill='none' stroke={strokeProp} height='56' Prop/>)
    }
    {(weatherIcon === 'Cloudy' && 
      <Cloudy fill='none' stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Fog' && 
      <Fog fill='none' stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Partlycloudyday' &&
      <Partlycloudyday fill='none' stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Partlycloudynight' && 
      <Partlycloudynight fill='none' stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Rain' && 
      <Rain fill='none' stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Sleet' && 
      <Sleet fill='none' stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Snow' && 
      <Snow fill='none' stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Wind' && 
      <Wind fill='none' stroke={strokeProp} width={widthProp} />)
    }
    </Container>
  )
  
}

export default Icon;