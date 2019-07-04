import React from 'react';
import styled from 'styled-components';

import colors from './utils/colors';

const { orange, blue } = colors;

const Background = styled.header`
  background-image: linear-gradient(${blue}, ${orange});
  color: white;
  text-align: center;
  width: 100%;
  padding: 80px 0;
  position: relative;
  top: 0;
`
const Title = styled.h1`
  font-size: 80px;
  font-weight: 100;
  margin-bottom: 24px;
`

function Header() {
  return (
    <Background>
      <Title>rain or shine</Title>
      <h2>weather forecaster</h2>
    </Background>
  )
}

export default Header;