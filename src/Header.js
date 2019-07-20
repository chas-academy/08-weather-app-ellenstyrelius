import React from 'react';
import styled from 'styled-components';

import colors from './utils/colors';

const Background = styled.header`
  background: ${colors.offWhite};
  width: 100%;
  padding: 64px 8px;
  border-bottom: 2px solid ${colors.gray4};
  position: relative;
  top: 0;
  text-align: center;
`
const Title = styled.h1`
  color: ${colors.gray1};
  font-size: 56px;
  font-weight: 100;
`
const SecondHeader = styled.h2`
  color: ${colors.gray2};
  margin-top: 16px;
  font-size: 32px;
  font-weight: 200;
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