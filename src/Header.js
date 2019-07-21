import React from 'react';
import styled from 'styled-components';

import colors from './utils/colors';

const Background = styled.header`
  background: ${colors.gray5};
  width: 100%;
  padding: 40px 8px;
  border-bottom: 4px solid ${colors.offWhite};
  position: relative;
  top: 0;
  text-align: center;
`
const Title = styled.h1`
  color: ${colors.gray1};
  font-size: 56px;
  font-weight: 100;
  letter-spacing: 2px;
`
const SecondHeader = styled.h2`
  color: ${colors.gray1};
  margin-top: 16px;
  font-size: 32px;
  font-weight: 200;
  letter-spacing: 2px;
`

function Header() {
  return (
    <Background>
      <Title>rain or shine</Title>
      <SecondHeader>weather forecaster</SecondHeader>
    </Background>
  )
}

export default Header;