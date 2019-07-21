import React from 'react';
import styled from 'styled-components';

import colors from './utils/colors';

const Background = styled.footer`
  background: ${colors.gray5};
  height: 120px;
  width: 100%;
  margin-top: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  bottom: 0;
`
const Text = styled.p`
  color: ${colors.gray1};
  font-size: 16px;
`
const LinkContainer = styled.div`
  margin-top: 8px;
`
const StyledLink = styled.a`
  color: ${colors.gray2};
  font-size: 14px;
  font-weight: 400;
  &:hover {
    color: ${colors.gray1};
    transition: 0.2s;
  }
`

function Footer() {
  return (
    <Background>
        <Text>- Ellen Styrélius 2019 -</Text>
        <LinkContainer>
          <StyledLink href='https://darksky.net/poweredby/' target='_blank' rel='noopener noreferrer'>
            Powered by Dark Sky
          </StyledLink>
        </LinkContainer>
    </Background>
  )
}

export default Footer;