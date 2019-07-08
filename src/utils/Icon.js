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

function Icon({ icon, fill, stroke, width }) {
  
  const weatherIcon = icon.charAt(0).toUpperCase() + icon.slice(1).split('-').join('');

  let fillProp = null;
  let strokeProp = null;
  let widthProp = null;

  // css properties for icons with default values if props are not received from parent component:
  fill ? fillProp = fill : fillProp = 'none';
  stroke ? strokeProp = stroke : strokeProp = colors.gray1;
  width ? widthProp = width : widthProp = '80';

  const Container = styled.div`
    width: ${widthProp}px;
    height: ${widthProp}px;
    margin-top: 16px;
    display: flex;
    align-items: center;
  `

  return (
    <Container>
    {(weatherIcon === 'Clearday' && 
      <Clearday fill={fillProp} stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Clearnight' && 
      <Clearnight fill={fillProp} stroke={strokeProp} height='56' Prop/>)
    }
    {(weatherIcon === 'Cloudy' && 
      <Cloudy fill={fillProp} stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Fog' && 
      <Fog fill={fillProp} stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Partlycloudyday' &&
      <Partlycloudyday fill={fillProp} stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Partlycloudynight' && 
      <Partlycloudynight fill={fillProp} stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Rain' && 
      <Rain fill={fillProp} stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Sleet' && 
      <Sleet fill={fillProp} stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Snow' && 
      <Snow fill={fillProp} stroke={strokeProp} width={widthProp} />)
    }
    {(weatherIcon === 'Wind' && 
      <Wind fill={fillProp} stroke={strokeProp} width={widthProp} />)
    }
    </Container>
  )
  
}

export default Icon;