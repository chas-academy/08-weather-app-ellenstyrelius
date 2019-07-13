import React from 'react';
import styled from 'styled-components';

import Button from './utils/Button';
import colors from './utils/colors';

const Btn = styled(Button)`
  background: ${colors.offWhite};
  color: ${colors.blue};
  margin-top: 24px;
  border: 2px solid ${colors.blueLight};
  font-size: 16px;

  &:hover{
    background: ${colors.blueLight};
    color: ${colors.offWhite};
  }
`

function ReloadButton({ handleRefresh }) {
  return(
    <Btn onClick={handleRefresh} title='Reload to get an updated forecast'>
      reload
    </Btn>
  )
}

export default ReloadButton;