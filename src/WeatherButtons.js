import React from 'react';
import styled from 'styled-components';

import ReloadButton from './ReloadButton';
import UnitButton from './UnitButton';

const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
`

function WeatherButtons({ handleRefresh, handleToggleUnit, tempIsCelsius }) {
  return (
    <Container>
      <ReloadButton {...{handleRefresh}} />
      <UnitButton handleToggleUnit={handleToggleUnit} tempIsCelsius={tempIsCelsius}/>
    </Container>
  )
}

export default WeatherButtons;