import React from 'react';
import styled from 'styled-components';

const Background = styled.header`
  background-image: linear-gradient(#679cda, #ff9900);
  color: white;
  text-align: center;
  width: 100%;
  padding: 80px 0;
  margin-bottom: 60px;
  position: relative;
  top: 0;
`
const Title = styled.h1`
  font-size: 90px;
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