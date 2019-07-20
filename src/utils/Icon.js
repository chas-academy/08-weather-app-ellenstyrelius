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

function Icon({ icon, stroke, height, marginTop }) {
  
  const weatherIcon = icon.charAt(0).toUpperCase() + icon.slice(1).split('-').join('');

  let strokeProp = null;
  let heightProp = null;

  // css properties for icons with default values if props are not received from parent component:
  stroke ? strokeProp = stroke : strokeProp = colors.gray1;
  height ? heightProp = height : heightProp = '56';

  const Container = styled.div`
    height: ${heightProp}px;
    margin-top: ${marginTop}px;
    display: flex;
    align-items: center;
    justify-items: center;
  `

  return (
    <Container>
    {(weatherIcon === 'Clearday' && 
      <Clearday fill='none' stroke={strokeProp} height={heightProp} />)
    }
    {(weatherIcon === 'Clearnight' && 
      <Clearnight fill='none' stroke={strokeProp} height={heightProp}/>)
    }
    {(weatherIcon === 'Cloudy' && 
      <Cloudy fill='none' stroke={strokeProp} height={heightProp} />)
    }
    {(weatherIcon === 'Fog' && 
      <Fog fill='none' stroke={strokeProp} height={heightProp} />)
    }
    {(weatherIcon === 'Partlycloudyday' &&
      <Partlycloudyday fill='none' stroke={strokeProp} height={heightProp} />)
    }
    {(weatherIcon === 'Partlycloudynight' && 
      <Partlycloudynight fill='none' stroke={strokeProp} height={heightProp} />)
    }
    {(weatherIcon === 'Rain' && 
      <Rain fill='none' stroke={strokeProp} height={heightProp} />)
    }
    {(weatherIcon === 'Sleet' && 
      <Sleet fill='none' stroke={strokeProp} height={heightProp} />)
    }
    {(weatherIcon === 'Snow' && 
      <Snow fill='none' stroke={strokeProp} height={heightProp} />)
    }
    {(weatherIcon === 'Wind' && 
      <Wind fill='none' stroke={strokeProp} height={heightProp} />)
    }
    </Container>
  )
  
}

export default Icon;