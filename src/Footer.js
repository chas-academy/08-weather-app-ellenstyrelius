import React from 'react';
import styled from 'styled-components';

import colors from './utils/colors';

const Background = styled.footer`
  background: ${colors.gray5};
  height: 100px;
  width: 100%;
  margin-top: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
`
const Text = styled.p`
  color: ${colors.gray2};
  font-size: 16px;
`

function Footer() {

  return (
    <Background>
        <Text>- Ellen Styrélius 2019 -</Text>
    </Background>
  )
}

export default Footer;