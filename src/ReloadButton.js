import React from 'react';
import styled from 'styled-components';

import Button from './utils/Button';
import colors from './utils/colors';

const Btn = styled(Button)`
  background: ${colors.offWhite};
  color: ${colors.blue};
  margin: 16px 8px 0 0;
  border-color: ${colors.blueLight};

  &:hover {
    background: ${colors.blueLight};
    color: ${colors.offWhite};
    transition: 0.4s;
  }
`

function ReloadButton({ handleRefresh }) {
  return(
      <Btn onClick={handleRefresh} title='Reload to get an updated forecast'>
        fresh forecast
      </Btn>
  )
}

export default ReloadButton;