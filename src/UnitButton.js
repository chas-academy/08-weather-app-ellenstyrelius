import React from 'react';
import styled from 'styled-components';

import colors from './utils/colors';
import Button from './utils/Button';

const Btn = styled(Button)`
  color: ${colors.gray2};
  width: 110px;
  margin-top: 16px;
  border-color: ${colors.gray2};

  &:hover {
    background: ${colors.orangeLight};
    transition: 0.4s;
  }
`

function UnitButton({ handleToggleUnit, tempIsCelsius }) {
  return(
    <Btn onClick={handleToggleUnit} title='Change temperature unit'>
      switch to °
      {tempIsCelsius ? 'F' : 'C'}
    </Btn>
  );
}

export default UnitButton;