import React from 'react';
import styled from 'styled-components';

import colors from './utils/colors';

const Background = styled.header`
  background: ${colors.orangeLight};
  width: 100%;
  padding: 40px 8px;
  position: relative;
  top: 0;
  text-align: center;
`
const Title = styled.h1`
  color: ${colors.offWhite};
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 4px;
`
const SecondHeader = styled.h2`
  color: ${colors.gray2};
  margin-top: 16px;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 4px;
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