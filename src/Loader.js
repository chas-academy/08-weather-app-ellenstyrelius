import React from 'react';
import styled, { keyframes } from 'styled-components';

import colors from './utils/colors';
import Icon from './utils/Icon';

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`
const AnimatedLoader = styled.div`
  margin-top: 104px;
  animation: ${rotate} 4s linear infinite;
`

function Loader() {
  return (
      <AnimatedLoader>
        <Icon icon='Clearday' stroke={colors.gray1} height='64'/>
      </AnimatedLoader>

  )
}

export default Loader;