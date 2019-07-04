import React from 'react';
import styled from 'styled-components';

// import colors from './utils/colors';
import Button from './utils/Button';

const Container = styled.div`
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
  position: sticky;
  top: 8px;
`
const Btn = styled(Button)`
  width: 100px;
  margin-top: 8px;
`

function UnitButton({ handleToggleUnit, tempIsCelsius }) {

    return(
      <Container>
        <Btn className="unitBtn" onClick={handleToggleUnit}>
          switch to °
          {tempIsCelsius ? 'F' : 'C'}
        </Btn>
      </Container>
    );
}

export default UnitButton;