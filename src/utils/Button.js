import styled from 'styled-components';

import colors from './colors';

const Button = styled.button`
  background: ${colors.gray5};
  color: ${colors.offBlack};
  opacity: 0.8;
  padding: 4px 8px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 2px 2px ${colors.gray4};
  font-size: 14px;

  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: 0.2s;
  }
`

export default Button;