import React from 'react';
import styled from 'styled-components';

import colors from './utils/colors';

const Background = styled.header`
  width: 90%;
  margin: 0 auto;
  padding: 32px 8px;
  border-bottom: 2px solid ${colors.gray3};
  position: relative;
  top: 0;
  text-align: center;
`
const Title = styled.h1`
  color: ${colors.blue};
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 4px;
  font-style: italic;

  &:hover {
    color: ${colors.orangeLight};
    transition: 2s;
  }
`
const SecondHeader = styled.h2`
  color: ${colors.gray1};
  margin-top: 16px;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 4px;
  font-style: italic;
`

function Header() {
  return (
    <Background>
      <Title>Rain or Shine</Title>
      <SecondHeader>weather forecaster</SecondHeader>
    </Background>
  )
}

export default Header;