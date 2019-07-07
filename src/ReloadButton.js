import React from 'react';
import styled from 'styled-components';

import Button from './utils/Button';
import colors from './utils/colors';

const Btn = styled(Button)`
  background: ${colors.offWhite};
  color: ${colors.blue};
  margin-top: 40px;
  border: 2px solid ${colors.blueLight};
  font-size: 16px;

  &:hover{
    background: ${colors.blueLight};
    color: ${colors.offWhite};
  }
`

function ReloadButton({ handleRefresh }) {
  return(
    <Btn onClick={handleRefresh}>
      reload
    </Btn>
  )
}

export default ReloadButton;